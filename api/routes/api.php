<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;


Route::prefix('auth')->group(function () {
    Route::post('/', [AuthController::class, 'signIn']);
    Route::get('/', [AuthController::class, 'signOut'])->middleware(['auth:sanctum']);
});

Route::prefix('user')->group(function () {
    Route::post('/', [UserController::class, 'store']);
});


Route::middleware(['auth:sanctum'])->group(function () {});