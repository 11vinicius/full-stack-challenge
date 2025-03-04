
interface InputComponentProps {
    value: string;
    placeholder: string;
    type: 'text'|'password';
    error: string | null;
    onchangeText: React.ChangeEventHandler<HTMLInputElement>;
}



export function InputComponent({value, type, placeholder, error, onchangeText}:InputComponentProps){
    return (
        <div className="w-full mt-4">
            <input type={type} placeholder={placeholder} value={value} onChange={onchangeText} className={ error ? 'w-full rounded-md font-semibold text-purple-800 h-full px-2 py-4 border-2 border-red-600':'w-full border-2 border-purple-800 rounded-md font-semibold text-purple-800 h-full px-2 py-4'} />
            <span className="text-red-600">{error}</span>
        </div>
    );

}