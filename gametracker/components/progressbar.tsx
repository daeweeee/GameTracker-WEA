export default function ProgressBar({value, color} : {value: number, color: string}) {
    return (
        <div className="w-70 rounded-full h-2 bg-gray-800 mt-5 mr-5">
            <div
                className="h-2 rounded-full"
                style={{
                    width: `${value}%`,
                    backgroundColor: `${color}`
                }}>

            </div>
        </div>
    );
}