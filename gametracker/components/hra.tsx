export default function Hra({hodnoceni, obrazek, obrazekAlt, nazev, stav, platforma} : {hodnoceni: number, obrazek: string, obrazekAlt: string, nazev: string, stav: string, platforma: string}) {
    return (
        <div className="w-1/5"> 
            <div> // Sem dát obrázek na pozadí
                <h4>{hodnoceni}</h4>
            </div>
            <h5>{nazev}</h5>
            <div className="flex gap-1">
                <h6>{stav}</h6>
                [[Tecka sem]]
                <h6>{platforma}</h6>
            </div>
            
        </div>
    );
}