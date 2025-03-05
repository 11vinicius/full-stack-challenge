import { api } from "./base_service";


export async function login(email: string, password: string): Promise<any> {
    return api.post('/auth', {
        email: email,
        password: password
    });
}