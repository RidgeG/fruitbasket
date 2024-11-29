
import './App.css'
import {useState} from "react";

const FruitCounter = ({ fruit, amount, onIncrease, onDecrease }) => {
    return(
        <div>
            <h3>{fruit}</h3>
            <p>Aantal: {amount}</p>
            <button onClick={onDecrease}>-</button>
            <button onClick={onIncrease}>+</button>
        </div>
    );

};

function App() {
    const [aardbeien, setAardbeien] = useState(0);
    const [bananen, setBananen] = useState(0);
    const [appels, setAppels] = useState(0);
    const [kiwi , setKiwi] = useState(0);





    const increaseAmount = (fruit) => {
        switch (fruit) {
            case 'aardbeien':
                setAardbeien(aardbeien + 1);
                break;
            case 'bananen':
                setBananen(bananen + 1);
                break;
            case 'appels':
                setAppels(appels + 1);
                break;
            case 'kiwi':
                setKiwi(kiwi + 1);
                break;
            default:
                break;
        }
    };

    const decreaseAmount = (fruit) => {
        switch (fruit) {
            case 'aardbeien':
                setAardbeien(Math.max(0, aardbeien - 1));
                break;
            case 'bananen':
                setBananen(Math.max(0, bananen - 1));
                break;
            case 'appels':
                setAppels(Math.max(0, appels - 1));
                break;
            case 'kiwi':
                setKiwi(Math.max(0, kiwi - 1));
                break;
            default:
                break;
        }
    };

    const resetCounter = () => {
        setAardbeien(0)
        setBananen(0)
        setAppels(0)
        setKiwi(0)
    };

    return (
        <>
        <div>
            <h1>Fruitmand bezorgservice</h1>
            <FruitCounter
                fruit="aardbeien"
                amount={aardbeien}
            onIncrease ={() => increaseAmount('aardbeien')}
            onDecrease={() => decreaseAmount('aardbeien')}
                />
            <FruitCounter
                fruit="bananen"
                amount={bananen}
                onIncrease ={() => increaseAmount('bananen')}
                onDecrease={() => decreaseAmount('bananen')}
            />
            <FruitCounter
                fruit="appels"
                amount={appels}
                onIncrease ={() => increaseAmount('appels')}
                onDecrease={() => decreaseAmount('appels')}
            />
            <FruitCounter
                fruit="kiwi"
                amount={kiwi}
                onIncrease ={() => increaseAmount('kiwi')}
                onDecrease={() => decreaseAmount('kiwi')}
            />
            <button onClick={resetCounter}>Reset</button>
            <p>Huidige hoeveelheid fruit</p>
            <p>Bananen: {bananen}, Aardbeien: {aardbeien}, Appels: {appels}, Kiwi: {kiwi}</p>
        </div>
        </>

    );




}

export default App
