import { ButtonComponent } from './_components/ButtonComponent'
import { InputComponent } from './_components/InputComponent'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'
import { Controller, useForm,  } from "react-hook-form"
import { ILogin } from './_interfaces/IAuth'
import { useAuthStore } from './_stores/authStore'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'


export function Login() {

    const schema = z.object({
        email: z.string().email('Insira um e-mail válido'),
        password: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres'),
    });

    const { formState: { errors }, handleSubmit, control } = useForm<ILogin>({
        resolver: zodResolver(schema),  
    })

    const { signIn, er, isAuthenticated, loading, resetState } = useAuthStore();
    const route = useNavigate();

    useEffect(() => {
        resetState();
    }, [resetState])

    if(isAuthenticated) {
        route('/')
    }
    
    return (
        <div className='flex justify-center items-center h-screen bg-gray-800'>
            <div className="w-[400px] rounded-md bg-purple-200 px-12 py-24">
                <h1 className="text-4xl font-semibold text-purple-900">Login</h1>
                <Controller
                    control={control}
                    name="email"
                    defaultValue='viniciuscesarlemes@gmail.com'
                    render={({ field: { onChange, value } } ) => 
                        <InputComponent loading={loading} type='text' value={value} placeholder="Digite Email" error={errors.email?.message? String(errors.email?.message) :null} onchangeText={onChange} />
                    }
                />

                <Controller
                    control={control}
                    name="password"
                    defaultValue='12345678'
                    render={({ field: { onChange, value } } ) => 
                        <InputComponent loading={loading}  type='password' value={value} placeholder="Digite Password" error={errors.password?.message? String(errors.password?.message) :null} onchangeText={onChange} />
                    }
                />

                <ButtonComponent loading={loading} title='Entrar'  onclick={handleSubmit(signIn)}/>
                {er && 
                <div className="w-full flex justify-center mt-4 items-center">
                    <span className="text-red-600 font-semibold text-center">{er}</span>
                </div>
                }  
            </div>
        </div>
    )
}