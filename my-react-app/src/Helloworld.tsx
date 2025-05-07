type PropNama = {
    name: string
}

export default function Helloworld({ name }: PropNama ) {
    return (
        <>
            <h1>Hai {name}</h1>
            <h2>Kita Testing Testing saja</h2>
        </>
    );
}