
interface ButtonComponentProps{
    title: string,
    onclick: () => void
}

export function ButtonComponent({title, onclick}:ButtonComponentProps){
    return (
        <button onClick={onclick} type="button" className="w-full bg-purple-300  mt-4 rounded-md h-12 font-semibold text-purple-800 p-2">
            {title}
        </button>
    );
}