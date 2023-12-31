<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CustomAuthController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/



// Auth::routes();
Auth::routes([
    'register' => false
]);
// Route::get('/', function () { return view('home'); });
Route::get('/', [HomeController::class, 'home'])->name('root');
Route::get('/home', [HomeController::class, 'home'])->name('home');

/**
 * Admin routes
 */
Route::middleware('auth')->prefix('admin')->group(function () {
    Route::get('/', [HomeController::class, 'admin'])->name('admin');
    Route::get('/{slug}', [HomeController::class, 'admin'])->name('admin.slug');

    // users
    Route::get('/users/{id}', [HomeController::class, 'admin'])->name('admin.get.users');
    // users axios
    Route::get('/user/all', [UserController::class, 'getUsers'])->name('admin.get.all.users');
    Route::get('/user/single/{id}', [UserController::class, 'getSingleUser'])->name('admin.get.single.user');
});

/**
 * Normal routes
 */
Route::middleware('auth')->prefix('u')->group(function () {
    Route::get('/', [HomeController::class, 'normal'])->name('normal');
    Route::get('/{slug}', [HomeController::class, 'normal'])->name('normal.slug');
});

/**
 * Accout routes
 */
Route::middleware('auth')->prefix('account')->group(function () {
    Route::post('/save', [UserController::class, 'saveUser'])->name('account.save.account');
    Route::post('/profile/save', [UserController::class, 'saveProfile'])->name('account.save.profile');
    Route::post('/change-password', [UserController::class, 'changePassword'])->name('account.change.password');
});

/**
 * Custom authentication
 */
Route::post('login', [CustomAuthController::class, 'login'])->name('custom.login');

/**
 * Registration
 */
Route::get('/grandiose-registration', function(){
    return view('layouts.app');
})->name('registration');
Route::post('/grandiose-registration', [UserController::class, 'registration'])->name('save.user.registration');
Route::get('/grandiose-thank-you', function(){
    return view('layouts.app');
})->name('grandiose.thank.you');
