<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Events\Login;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Http\Requests\SignupRequest;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Models\Role;


class AuthController extends Controller
{
    public function login(): Response
    {
        return Inertia::render('Auth/Login');
    }

    public function dologin(Request $request)
    {
        $credentials = $request->all(['email', 'password']);

        if (Auth::attempt($credentials, $request->boolean('remember'))) {
            $request->session()->regenerate();

            return redirect()->intended('/dashboard');
        }

        return back()->withErrors([
            'email' => 'Les informations d\'identification fournies sont incorrectes.',
        ])->onlyInput('email');
        
    }

    public function signup(): Response
    {
        return Inertia::render('Auth/Signup');
    }

    public function dosignup(SignupRequest $request)
    {
        // Logique d'inscription ici
        $infos = $request->validated();

        // Par exemple, créer un nouvel utilisateur
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            // Hachage du mot de passe avant l'enregistrement dans la BDD
            'password' => Hash::make($request->password), 
        ]);

        // Connecter automatiquement l'utilisateur après l'inscription
        Auth::login($user);
        return redirect('/dashboard');
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }

}
