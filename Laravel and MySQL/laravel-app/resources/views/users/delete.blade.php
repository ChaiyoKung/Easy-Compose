@extends('layouts.app')

@section('title', 'Delete user')

@section('main')
    <h1>Delete user</h1>
    <hr>
    <div>
        <form action="{{ route('api-delete-user', $user->id) }}" method="post">
            @csrf
            @method('delete')
            <input type="hidden" name="id" required value="{{ $user->id }}">
            <p>
                Do you want to delete <b>{{ $user->name }}</b> ?
            </p>
            <a href="{{ route('user') }}">Cancel</a>
            <span class="mx-1">|</span>
            <button type="submit">Delete</button>
        </form>
    </div>
@endsection
