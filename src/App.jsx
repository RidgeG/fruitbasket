
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

    const [voornaam, setVoornaam] = useState('');
    const [achternaam, setAchternaam] = useState('');
    const [leeftijd, setLeeftijd] = useState('');
    const [postcode, setPostcode] = useState('');
    const [frequentie, setFrequentie] = useState('ieder week');
    const [tijdvak, setTijdvak] = useState('overdag');
    const [opmerking, setOpmerking] = useState('');
    const [akkoord, setAkkoord] = useState(false);


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

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            fruit: {
                bananen,
                aardeien,
                appels,
                kiwis
            },
            formulier: {
                voornaam,
                achternaam,
                leeftijd,
                postcode,
                frequentie,
                tijdvak,
                opmerking,
                akkoord
            }
        });
    };


    return (
        <>
        <div>
            <h1>Fruitmand bezorgservice</h1>
            <FruitCounter
                fruit="aardbeien"
                amount={aardbeien}
                onIncrease={() => increaseAmount('aardbeien')}
                onDecrease={() => decreaseAmount('aardbeien')}
            />
            <FruitCounter
                fruit="bananen"
                amount={bananen}
                onIncrease={() => increaseAmount('bananen')}
                onDecrease={() => decreaseAmount('bananen')}
            />
            <FruitCounter
                fruit="appels"
                amount={appels}
                onIncrease={() => increaseAmount('appels')}
                onDecrease={() => decreaseAmount('appels')}
            />
            <FruitCounter
                fruit="kiwi"
                amount={kiwi}
                onIncrease={() => increaseAmount('kiwi')}
                onDecrease={() => decreaseAmount('kiwi')}
            />
            <button onClick={resetCounter}>Reset</button>
            <p>Huidige hoeveelheid fruit</p>
            <p>Bananen: {bananen}, Aardbeien: {aardbeien}, Appels: {appels}, Kiwi: {kiwi}</p>
        </div>

        <h2>Bestelformulier</h2>

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="voornaam">Voornaam:</label>
                <input
                    type="text"
                    id="voornaam"
                    value={voornaam}
                    onChange={(e) => setVoornaam(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="achternaam">Achternaam:</label>
                <input
                    type="text"
                    id="achternaam"
                    value={achternaam}
                    onChange={(e) => setAchternaam(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="leeftijd">Leeftijd:</label>
                <input
                    type="number"
                    id="leeftijd"
                    value={leeftijd}
                    onChange={(e) => setLeeftijd(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="postcode">Postcode:</label>
                <input
                    type="text"
                    id="postcode"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="frequentie">Bezorgfrequentie:</label>
                <select
                    id="frequentie"
                    value={frequentie}
                    onChange={(e) => setFrequentie(e.target.value)}
                >
                    <option value="ieder week">Iedere week</option>
                    <option value="om de week">Om de week</option>
                    <option value="ieder maand">Iedere maand</option>
                </select>
            </div>
            <div>
                <label>Tijdvak:</label>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="tijdvak"
                            value="overdag"
                            checked={tijdvak === 'overdag'}
                            onChange={() => setTijdvak('overdag')}
                        />
                        Overdag
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="tijdvak"
                            value="s avonds"
                            checked={tijdvak === "s avonds"}
                            onChange={() => setTijdvak("s avonds")}
                        />
                        's Avonds
                    </label>
                </div>
            </div>
            <div>
                <label htmlFor="opmerking">Opmerking:</label>
                <textarea
                    id="opmerking"
                    value={opmerking}
                    onChange={(e) => setOpmerking(e.target.value)}
                />
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={akkoord}
                        onChange={(e) => setAkkoord(e.target.checked)}
                    />
                    Ik ga akkoord met de voorwaarden
                </label>
            </div>
            <button type="submit" disabled={!akkoord}>Verzenden</button>
        </form>


</>

)
    ;
}


export default App
