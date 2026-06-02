export default function Status({name, value} : {name: string, value: string}) {
    return (
        <div>
            <h4>{name}</h4>
            <p>{value}</p>
        </div>
    );
}