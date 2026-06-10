export default function Status({name, value, color, unit} : {name: string, value: number, color: string, unit?: string}) {
    return (
        <div className="w-1/4 border border-gray-800 p-5 rounded-2xl bg-[#0E0F14]">
            <h4 className="text-gray-400 text-xs">{name}</h4>
            <p className="text-3xl font-bold" style={{color}}>
                {value}
                {unit && <span className="text-xl text-cyan-300">{unit}</span>}
            </p>
        </div>
    );
}