import { useState } from "react";

function App() {

  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));

  }

  const handleClear = () => {
    setResult('');

  }

  const handleRemove = () => {
    setResult(result.slice(0, -1));

  }
 
  const handleCalculate = () => {
      try {
        setResult(eval(result).toString());
      } catch {
        setResult('use one operator');
      }
  }

    return (
            <div className="wrapper">
                  <input type="text" 
                  className="screen calc-numbers" 
                  value={result}/>
                  <div className="buttons">
                    <button onClick={handleClear} name="" className="button clear">C</button>
                    <button onClick={handleRemove} className="button opt">&larr;</button>
                    <button onClick={handleClick} name="/" className="button opt">&divide;</button>
                    <button onClick={handleClick} name="7" className="button">7</button>
                    <button onClick={handleClick} name="8" className="button">8</button>
                    <button onClick={handleClick} name="9" className="button">9</button>
                    <button onClick={handleClick} name="*" className="button opt">X</button>
                    <button onClick={handleClick} name="4" className="button">4</button>
                    <button onClick={handleClick} name="5" className="button">5</button>
                    <button onClick={handleClick} name="6" className="button">6</button>
                    <button onClick={handleClick} name="-"className="button opt">-</button>
                    <button onClick={handleClick} name="1" className="button">1</button>
                    <button onClick={handleClick} name="2" className="button">2</button>
                    <button onClick={handleClick} name="3" className="button">3</button>
                    <button onClick={handleClick} name="+" className="button opt">+</button>
                    <button onClick={handleClick} name="0" className="button zero">0</button>
                    <button onClick={handleCalculate} name="=" className="button equals">=</button>
                  </div>
            </div>
    );
}

export default App;
