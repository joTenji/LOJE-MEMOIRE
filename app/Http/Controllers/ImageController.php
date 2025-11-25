<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ImageController extends Controller
{
    //
    public function show($name)
    {
        $path = "D:\DOCUMENTS\memoire py\\$name";

        if (!file_exists($path)) {
            abort(404);
        }

        return response()->file($path);
    }

}
