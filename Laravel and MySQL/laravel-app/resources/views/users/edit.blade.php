@extends('layouts.app')

@section('title', 'Edit user')

@section('main')
    <h1>Edit user</h1>
    <hr>
    <div>
        <form action="{{ route('api-update-user', $user->id) }}" method="post" class="mb-3">
            @csrf
            @method('put')
            <input type="hidden" name="id" required value="{{ $user->id }}">
            <div class="mb-3">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" value="{{ $user->name }}">
            </div>
            <div class="mb-3">
                <label for="age">Age</label>
                <input type="number" name="age" id="age" value="{{ $user->age }}">
            </div>
            <div class="mb-3">
                <label for="gender">Gender</label>
                <select name="gender" id="gender">
                    <option value=""></option>
                    <option value="Male" @if ($user->gender == 'Male') selected @endif>Male</option>
                    <option value="Female" @if ($user->gender == 'Female') selected @endif>Female</option>
                </select>
            </div>
            <button type="submit">Save</button>
        </form>
        <a href="{{ url()->previous() }}">Back</a>
    </div>
@endsection
