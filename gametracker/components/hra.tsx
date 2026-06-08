export default function Hra({hodnoceni, obrazek, obrazekAlt, nazev, stav, platforma, color} : {hodnoceni: number, obrazek: string, obrazekAlt: string, nazev: string, stav: string, platforma: string, color: string}) {
    return (
        <div className="w-1/5 rounded-2xl"> 
            <div> // Sem dát obrázek na pozadí
                <h4 style={{color}}>{hodnoceni}</h4>
            </div>
            <h5 className="text-sm font-bold">{nazev}</h5>
            <div className="flex gap-1">
                <h6 className="text-xs text-gray-400">{stav} • {platforma}</h6>
            </div>
            
        </div>
    );
}