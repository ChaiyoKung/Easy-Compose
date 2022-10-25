<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/users', [UserController::class, 'index'])->name("user");

Route::get('/users/create', [UserController::class, 'create'])->name("create-user");
Route::post('/users', [UserController::class, 'createUser'])->name('api-create-user');

Route::get('/users/{id}', [UserController::class, 'details'])->name("user-details");

Route::get('/users/{id}/edit', [UserController::class, 'edit'])->name("edit-user");
Route::put('/users/{id}', [UserController::class, 'updateUser'])->name('api-update-user');

Route::get('/users/{id}/delete', [UserController::class, 'delete'])->name("delete-user");
Route::delete('/users/{id}', [UserController::class, 'deleteUser'])->name('api-delete-user');