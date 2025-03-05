export interface ILogin {
    email: string;
    password: string;
}

export interface IAuthStore {
    er: string,
    loading: boolean,
    isAuthenticated: boolean,
    signIn: (ILogin: any) => void
    resetState: () => void; 
}