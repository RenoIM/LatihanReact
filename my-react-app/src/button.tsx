import './button.css';

type ButtonType = {
    Flag: String
}

export default function Button({Flag}: ButtonType) {
    function handleclick(){
        alert('Tombol ditekan bjir');
    }

    function handleclickTrue(){
        alert('Tombol yang ditekan true value')
    }

    return <button className="tombol" onClick={Flag == 'Hello' ? handleclickTrue : handleclick }> tekan bro</button>
}