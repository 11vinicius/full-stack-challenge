import { create } from 'zustand'
import { IAuthStore, ILogin } from '../_interfaces/IAuth'
import { login } from '../_services/auth'

export const useAuthStore = create<IAuthStore>((set)=>({
    loading: false,
    isAuthenticated: false,
    er: '',
    resetState: () => set({er: '', loading: false, isAuthenticated: false}),
    signIn: async(body: ILogin) =>{
        set({loading: true})
        try {
            const { data, status } = await login(body.email, body.password)
            if(status === 200) {
                localStorage.setItem('token', data.token)
                set({isAuthenticated: true})
            }
            set({loading: false})
        } catch (error: any) {
            if (error.response) {
                set({er: error.response.data.error})
                set({loading: false})
            }
        }
       
    }
}))