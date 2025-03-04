<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lead;
use App\Http\Requests\LeadRequest;

class LeadController extends Controller
{
    protected $lead;
    public function __construct(Lead $lead) {
        $this->lead = $lead;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return $this->lead->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(LeadRequest $request)
    {
        try {
            $this->lead->create($request->all());
            return response()->json(['message' => 'criado com sucesso'], 201);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 400);
        }
        

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(LeadRequest $request, string $id)
    {
        try {
            $lead = $this->lead->find($id);
            $lead->update($request->all());
            return response()->json(['message' => 'Modificado com sucesso e sem conteudo de resposta'], 204);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $lead = $this->lead->find($id);
            $lead->delete();
            return response()->json(['message' => 'Deletado com sucesso e sem conteudo na resposta'], 204);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 400);
        }
    }
}
