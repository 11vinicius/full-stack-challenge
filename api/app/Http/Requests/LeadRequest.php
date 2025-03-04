<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LeadRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'=>'required',
            'email'=> 'required',
            'phone'=> 'required',
            'message'=> 'required',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Campo nome é obrigatório.',
            'email.required' => 'Campo email é obrigatório.',
            'phone.required' => 'Campo telefone é obrigatório.',
            'message.required' => 'Campo mensagem é obrigatório.',
        ];
    }
}
