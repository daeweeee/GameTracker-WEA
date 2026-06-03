export default function AktHranaHra({obrazek, obrazekAlt, platforma, nazev, coDelam, progress, barva} : {obrazek: string, obrazekAlt: string, platforma: string, nazev: string, coDelam: string, progress: number, barva: string}) {
    return (
        <div className="w-1/2 border border-gray-800 p-5 rounded-2xl bg-[#0E0F14]">
            <div className="w-1/3">
                <img src={obrazek} alt={obrazekAlt} />
            </div>
            <div>
                <div>
                    <h3 className="text-sm">{platforma}</h3>
                    <h2 className="text-xl font-bold">{nazev}</h2>
                    <p className="text-gray-400">{coDelam}</p>
                </div>
                <div className="flex">
                    -- Progress bar sem --
                    <p className="text-gray-400">{progress}% complete</p>
                </div>
            </div>
            
            
        </div>
    );
}