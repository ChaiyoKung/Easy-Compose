@extends('layouts.app')

@section('title', 'Index')

@section('main')
    <h1>Hello World</h1>
    <a href="{{ route('user') }}">Go to users page</a>
@endsection
