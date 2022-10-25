<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'chaiyo',
            'email' => 'chaiyo@example.com',
            'password' => Hash::make('chaiyo1234'),
            'age' => 23,
            'gender' => 'Male'
        ]);

        User::create([
            'name' => 'ming',
            'email' => 'ming@example.com',
            'password' => Hash::make('ming1234'),
            'age' => 22,
            'gender' => 'Female'
        ]);
    }
}
