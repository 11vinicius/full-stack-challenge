import {  useEffect } from "react";
import { ButtonComponent } from "./_components/ButtonComponent";
import { useAuthStore } from "./_stores/authStore";
import { useNavigate } from "react-router-dom";

export function Home() {
    const { logout, isAuthenticated } = useAuthStore();
    const route = useNavigate();

    // useEffect(() => {
    //     if(!isAuthenticated) {
    //         route('/')
    //     }
    // }, [isAuthenticated, logout])


    return (
        <div className="h-screen bg-gray-800">
            <div className="bg-gray-700 flex justify-end  w-full min-h-14">
                <div className="w-1/12 pb-4 px-4">
                    <ButtonComponent title="Sair" loading={false} onclick={() => logout()} />
                </div>
            </div>
            <h1>home</h1>
        </div>
    )
}