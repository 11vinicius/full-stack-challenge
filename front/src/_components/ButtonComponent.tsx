
import { Icon } from '@iconify/react';

interface ButtonComponentProps{
    title: string,
    loading: boolean
    onclick: () => void
}

export function ButtonComponent({title, loading, onclick}:ButtonComponentProps){
    return (
        <button onClick={onclick} type="button" className="w-full flex justify-center items-center bg-purple-300  mt-4 rounded-md h-12 font-semibold text-purple-800 p-2">
            {loading? 
            <Icon icon="line-md:loading-alt-loop" width="30" height="30" />
            :<span>{title}</span>
        }
        </button>
    );
}