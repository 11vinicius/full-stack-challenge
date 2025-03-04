import { ButtonComponent } from './_components/ButtonComponent'
import { InputComponent } from './_components/InputComponent'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'
import { Controller, useForm,  } from "react-hook-form"
import { ILogin } from './_interfaces/login'


export function Login() {

    const schema = z.object({
        email: z.string().email('Insira um e-mail válido'),
        password: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres'),
    });

    const { formState: { errors }, handleSubmit, control } = useForm<ILogin>({
        resolver: zodResolver(schema),  
    })

    async function onSubmit(data: ILogin) {
        console.log(data)
    }


    return (
        <div className='flex justify-center items-center h-screen bg-gray-800'>
            <div className="w-[400px] rounded-md bg-purple-200 px-12 py-24">
                <h1 className="text-4xl font-semibold text-purple-900">Login</h1>
                <Controller
                    control={control}
                    name="email"
                    defaultValue=''
                    render={({ field: { onChange, value } } ) => 
                        <InputComponent type='text' value={value} placeholder="Digite Email" error={errors.email?.message? String(errors.email?.message) :null} onchangeText={onChange} />
                    }
                />

                <Controller
                    control={control}
                    name="password"
                    defaultValue=''
                    render={({ field: { onChange, value } } ) => 
                        <InputComponent type='password' value={value} placeholder="Digite Password" error={errors.password?.message? String(errors.password?.message) :null} onchangeText={onChange} />
                    }
                />

                <ButtonComponent title='Entrar'  onclick={handleSubmit(onSubmit)}/>
            </div>
        </div>
    )
}