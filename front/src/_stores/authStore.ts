import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';
import { login } from '../_services/auth'; 

interface ILogin {
  email: string;
  password: string;
}

interface IAuthStore {
  loading: boolean;
  isAuthenticated: boolean;
  er: string;
  resetState: () => void;
  signIn: (body: ILogin) => Promise<void>;
  logout: () => void;
}

type AuthPersistState = Pick<IAuthStore, 'isAuthenticated'>;

type AuthStorePersist = (
  set: Parameters<StateCreator<IAuthStore>>[0],
  get: Parameters<StateCreator<IAuthStore>>[1]
) => IAuthStore;

export const useAuthStore = create<IAuthStore, [['zustand/persist', AuthPersistState]]>(
  persist(
    (set) => ({
      loading: false,
      isAuthenticated: false,
      er: '',

      resetState: () => set({ er: '', loading: false, isAuthenticated: false }),

      signIn: async (body: ILogin) => {
        set({ loading: true });
        try {
          const { data, status } = await login(body.email, body.password);
          if (status === 200) {
            localStorage.setItem('token', data.token);
            set({ isAuthenticated: true });
          }
          set({ loading: false });
        } catch (error: any) {
          if (error.response) {
            set({ er: error.response.data.error });
            set({ loading: false });
          }
        }
      },

      logout: () => {
        localStorage.removeItem('token');
        set({ isAuthenticated: false });
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ isAuthenticated: state.isAuthenticated } as AuthPersistState),
    } as PersistOptions<IAuthStore, AuthPersistState>
  )
);