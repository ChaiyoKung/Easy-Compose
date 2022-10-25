@extends('layouts.app')

@section('title', 'Create user')

@section('main')
    <h1>Create user</h1>
    <hr>
    <div>
        <form action="{{ route('api-create-user') }}" method="post" class="mb-3">
            @csrf
            <div class="mb-3">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" required>
            </div>
            <div class="mb-3">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" required>
                @error('email')
                    <div class="text-danger">{{ $message }}</div>
                @enderror
            </div>
            <div class="mb-3">
                <label for="age">Age</label>
                <input type="number" name="age" id="age" required>
            </div>
            <div class="mb-3">
                <label for="gender">Gender</label>
                <select name="gender" id="gender" required>
                    <option value=""></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" required>
            </div>
            <button type="submit">Create</button>
        </form>
        <a href="{{ route('user') }}">Back to list</a>
    </div>
@endsection
