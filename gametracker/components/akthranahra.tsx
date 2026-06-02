export default function AktHranaHra({obrazek, obrazekAlt, platforma, nazev, coDelam, progress} : {obrazek: string, obrazekAlt: string, platforma: string, nazev: string, coDelam: string, progress: number}) {
    return (
        <div>
            <img src={obrazek} alt={obrazekAlt} />
            <h3>{platforma}</h3>
            <h2>{nazev}</h2>
            <p>{coDelam}</p>
            <p>{progress}% complete</p>
        </div>
    );
}