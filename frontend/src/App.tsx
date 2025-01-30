import { useState } from 'react';
import './App.css';
import { GetTotp } from "../wailsjs/go/main/App";

function App() {
    const [resultText, setResultText] = useState("");
    const [token, setToken] = useState('');
    const updateToken = (e: any) => setToken(e.target.value);
    const updateResultText = (result: string) => setResultText(result);

    function totp() {
        GetTotp(token).then(updateResultText);
    }

    return (
        <div id="App">
            <div id="input" className="input-box">
                <input type="text" name="text" className="input-element" placeholder="TOKEN HERE" onChange={updateToken} />
                <button onClick={totp}>Generate</button>
                <div id="result" className="result">{resultText}</div>
            </div>
        </div>
    )
}

export default App
