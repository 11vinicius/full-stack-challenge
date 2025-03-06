import { useAuthStore } from '../_stores/authStore';
import { useNavigate } from 'react-router-dom';
import { ReactNode, useEffect } from 'react';

interface PrivateRouteProps {
    children: ReactNode;
}

function AuthMiddleware({ children }:PrivateRouteProps) {
    const { isAuthenticated } = useAuthStore();
    const route = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        if(!token || isAuthenticated != true) {
            route('/login', { replace: true });
        }
    },[token, isAuthenticated, route])
    
    return (token && isAuthenticated) ? children : null;
}

export default  AuthMiddleware;