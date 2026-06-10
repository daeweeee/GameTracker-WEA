export default function Hra({hodnoceni, obrazek, obrazekAlt, nazev, stav, platforma, color} : {hodnoceni: number, obrazek: string, obrazekAlt: string, nazev: string, stav: string, platforma: string, color: string}) {
    return (
        <div className="w-1/5 rounded-2xl overflow-hidden bg-[#0E0F14] p-3">
            <div className="relative w-full h-100 rounded-2xl overflow-hidden bg-gray-900 mb-3">
                {obrazek ? (
                    <img
                        src={obrazek}
                        alt={obrazekAlt || nazev}
                        className="w-full h-100 object-cover"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-xs text-gray-500">
                        No image provided
                    </div>
                )}
                <div className="absolute top-2 right-2 bg-black/70 rounded-full px-2 py-1">
                    <h4 className="text-sm font-semibold" style={{color}}>{hodnoceni}</h4>
                </div>
            </div>
            <h5 className="text-sm font-bold">{nazev}</h5>
            <div className="flex gap-1">
                <h6 className="text-xs text-gray-400">{stav} • {platforma}</h6>
            </div>
        </div>
    );
}