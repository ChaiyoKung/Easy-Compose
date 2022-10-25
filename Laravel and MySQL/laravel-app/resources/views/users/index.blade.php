@extends('layouts.app')

@section('title', 'Users')

@section('main')
    <h1>Users</h1>
    <hr>
    <div>
        <div class="mb-3">
            <a href="{{ route('create-user') }}">Create user</a>
        </div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                @foreach ($users as $user)
                    <tr>
                        <td>{{ $user->id }}</td>
                        <td>{{ $user->name }}</td>
                        <td>{{ $user->email }}</td>
                        <td>{{ $user->age }}</td>
                        <td>{{ $user->gender }}</td>
                        <td>
                            <a href="{{ route('user-details', ['id' => $user->id]) }}">Details</a>
                            <span class="mx-1">|</span>
                            <a href="{{ route('edit-user', ['id' => $user->id]) }}">Edit</a>
                            <span class="mx-1">|</span>
                            <a href="{{ route('delete-user', ['id' => $user->id]) }}">Delete</a>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection
