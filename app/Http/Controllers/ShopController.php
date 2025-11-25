<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Http;

class ShopController extends Controller
{
    //
    public function index(){
        $results = session('results', null);
        $img_req = session('img_req', null);

        return Inertia::render('shop/index',[
            'results' => $results,
            'img_req' => $img_req
        ]);
    }

    public function dosearch(Request $request)
    {
        // 1. Validation Laravel
        $request->validate([
            'image' => 'required|image',
        ]);

        $file = $request->file('image');

        $base64 = base64_encode(file_get_contents($file));

        // 2. Appel à l'API Python
        $response = Http::attach(
            'file',          // Nom du champ attendu par Python
            file_get_contents($file),
            $file->getClientOriginalName()
        )->post('http://127.0.0.1:5000/search'); // URL API Python

        // 3. Gestion d’erreur si l’API Python n’est pas OK
        if (!$response->successful()) {
            return back()->withErrors([
                'image' => "L'analyse a échoué : API inaccessible"
            ]);
        }

        // 4. On récupère le JSON envoyé par Python
        $result = $response->json();

        
        return redirect()
            ->route('shop')
            ->with(['results' => $result, 'img_req' => $base64]);
    }
}
