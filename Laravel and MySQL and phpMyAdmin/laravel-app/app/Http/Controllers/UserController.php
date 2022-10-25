<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    // GET: Users
    public function index()
    {
        $users = User::all();

        return view('users.index', compact('users'));
    }

    // GET: User details
    public function details($id)
    {
        $user = User::where('id', $id)->first();

        return view('users.details', compact('user'));
    }

    // GET: Create user
    public function create()
    {
        return view('users.create');
    }

    // POST: Create user
    public function createUser(Request $request)
    {
        $request->validate([
            'email' => 'required|unique:users',
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'age' => $request->age,
            'gender' => $request->gender,
            'password' => Hash::make($request->password),
        ]);

        return redirect()->route('user');
    }

    // GET: Edit user
    public function edit($id)
    {
        $user = User::where('id', $id)->first();

        return view('users.edit', compact('user'));
    }

    // PUT: Update user
    public function updateUser(Request $request, $id)
    {
        User::where('id', $request->id)->update([
            'name' => $request->name,
            'age' => $request->age,
            'gender' => $request->gender,
        ]);

        return redirect()->route('user-details', $id);
    }

    // GET: Delete user
    public function delete($id)
    {
        $user = User::where('id', $id)->first();

        return view('users.delete', compact('user'));
    }

    // DELETE: Delete user
    public function deleteUser(Request $request, $id)
    {
        User::where('id', $request->id)->delete();

        return redirect()->route('user');
    }
}
