<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\UserRequest;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    protected $user;
    protected $hash;
    public function __construct(User $user, Hash $hash) {
        $this->user = $user;
        $this->hash = $hash;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $this->user->get();
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(UserRequest $request)
    {   
        try {
            return $this->user->create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => $this->hash::make($request->password)
            ]);
        } catch (\Throwable $th) {
            response()->json(['error' => $th->getMessage()], 400);
        }
        
    }

}
