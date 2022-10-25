@extends('layouts.app')

@section('title', 'User Details')

@section('main')
    <h1>User Details</h1>
    <hr>
    <div>
        <div>
            <div class="mb-3">
                <span class="mr-1"><b>ID:</b></span>
                <span>{{ $user->id }}</span>
            </div>
            <div class="mb-3">
                <span class="mr-1"><b>Name:</b></span>
                <span>{{ $user->name }}</span>
            </div>
            <div class="mb-3">
                <span class="mr-1"><b>Email:</b></span>
                <span>{{ $user->email }}</span>
            </div>
            <div class="mb-3">
                <span class="mr-1"><b>Age:</b></span>
                <span>{{ $user->age }}</span>
            </div>
            <div class="mb-3">
                <span class="mr-1"><b>Gender:</b></span>
                <span>{{ $user->gender }}</span>
            </div>
            <div class="mb-3">
                <span class="mr-1"><b>Created At:</b></span>
                <span>{{ $user->created_at }}</span>
            </div>
            <div class="mb-3">
                <span class="mr-1"><b>Updated At:</b></span>
                <span>{{ $user->updated_at }}</span>
            </div>
        </div>
        <div>
            <a href="{{ route('user') }}">Back to list</a>
            <span class="mx-1">|</span>
            <a href="{{ route('edit-user', ['id' => $user->id]) }}">Edit</a>
        </div>
    </div>
@endsection
