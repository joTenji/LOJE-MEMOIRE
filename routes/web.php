<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\ShopController;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::controller(ShopController::class)->group(function(){
    Route::get('/loje/shop', 'index')->name('shop');
    Route::post('/loje/shop/dosearch', 'dosearch');
    Route::get('/loje/shop/detail/{path}', 'detail')->name('shop.detail')->where('path', '.*');
});

Route::get('/image/{path}', [ImageController::class, 'show'])
     ->where('path', '.*');



Route::middleware("guest")->controller(AuthController::class)->group(function () {
    // Additional guest routes can be added here
    Route::get('/login', "login")->name('login');
    // Route::get("/", function () {return redirect()->route('login');});
    Route::post('/dologin', "dologin")->name('dologin');
    Route::get('/signup', "signup")->name('Inscription');
    Route::post('/dosignup', "dosignup");
});

Route::get('/logout', [AuthController::class, 'logout'])->name('logout')->middleware('auth');

