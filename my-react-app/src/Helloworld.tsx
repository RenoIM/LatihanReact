import './button.css'
import { PropNama } from './Helloworlddto';

export default function Helloworld({ name , gender , age=20}: PropNama ) {
    return (
        <>
            <h1>Hai {name}</h1>
            <h2>Gender nya {gender}</h2>
            <h2>umur nya {age}</h2>
            <h2>Kita Testing-Testing saja</h2>
        </>
    );
}