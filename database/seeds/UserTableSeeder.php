<?php

use Illuminate\Database\Seeder;
use App\Role;
use App\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role_admin = Role::where('name', 'admin')->first();
        $role_client  = Role::where('name', 'client')->first();
        
        $employee = new User();
        $employee->name = 'Nicolas Pierre';
        $employee->email = 'nicolas.pierre@example.com';
        $employee->password = bcrypt('secret');
        $employee->save();
        $employee->role()->attach($role_admin);

        $employee = new User();
        $employee->name = 'Nicky Pierre';
        $employee->email = 'nicky.pierre@example.com';
        $employee->password = bcrypt('secret');
        $employee->save();
        $employee->role()->attach($role_admin);

        $manager = new User();
        $manager->name = 'Joachim Pierre';
        $manager->email = 'joachim.pierre@example.com';
        $manager->password = bcrypt('secret');
        $manager->save();
        $manager->role()->attach($role_client);
    }
}
