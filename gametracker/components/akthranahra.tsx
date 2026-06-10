import ProgressBar from "./progressbar";

export default function AktHranaHra({obrazek, platforma, nazev, coDelam, progress, color} : {obrazek: string, platforma: string, nazev: string, coDelam: string, progress: number, color: string}) {
    return (
        <div className="w-1/2 border border-gray-800 p-5 rounded-2xl bg-[#0E0F14] flex gap-5">
            <div className="relative w-32 h-32 rounded-2xl overflow-hidden bg-gray-900">
                {obrazek ? (
                    <img
                        src={obrazek}
                        alt={`${nazev} cover`}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-xs text-gray-500">
                        No image provided
                    </div>
                )}
            </div>
            <div className="w-2/3 ml-auto">
                <div>
                    <h3 className="text-sm" style={{color}}>{platforma}</h3>
                    <h2 className="text-2xl font-bold">{nazev}</h2>
                    <p className="text-gray-400">{coDelam}</p>
                </div>
                <div className="flex">
                    <ProgressBar
                        value={progress}
                        color={color}
                    />
                    <p className="text-gray-400">{progress}% complete</p>
                </div>
            </div>
        </div>
    );
}