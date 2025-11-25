<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class SignupRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => [
                'required',
                'string',
                'confirmed',
                // --- Règle de robustesse du mot de passe ---
                Password::min(8)
                    ->mixedCase() // Exige majuscule et minuscule
                    ->numbers()   // Exige un chiffre
                // ------------------------------------------
            ],
        ];
    }

    /**
     * Les messages d'erreur personnalisés pour les règles de validation.
     */
    public function messages(): array
    {
        return [
            // --- Messages pour les règles de base ---
            'name.required' => 'Le nom d\'utilisateur est obligatoire.',
            'email.required' => 'L\'adresse e-mail est obligatoire.',
            'email.email' => 'Le format de l\'adresse e-mail n\'est pas valide.',
            'email.unique' => 'Cette adresse e-mail est déjà utilisée par un autre utilisateur.',
            'password.required' => 'Le mot de passe est obligatoire.',
            'password.confirmed' => 'Les mots de passe ne correspondent pas.',
            
            // --- Messages pour la robustesse (Password::) ---
            'password.min' => 'Le mot de passe doit contenir au moins 8 caractères.',
            'password.mixed' => 'Le mot de passe doit contenir des majuscules et des minuscules.',
            'password.numbers' => 'Le mot de passe doit contenir au moins un chiffre.'
        ];
    }
}
