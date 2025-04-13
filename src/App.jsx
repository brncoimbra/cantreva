import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(10);

  const contador = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className='container'>
        <img
          src='/images/cantreva.jpg'
          alt='Cantreva'
          className='cantreva-img'
        />
        <div className='content'>
          <h1>Quantas vezes cantreva já mamou hoje?</h1>
          <div className='horizontal-group'>
            <div className='counter-text'>Quantidade: {count}</div>
            <button className='button' onClick={contador}>
              Mamadas
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
