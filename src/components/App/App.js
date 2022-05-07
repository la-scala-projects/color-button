import './App.css';
import {useState} from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const changeButtonColorHandler = () => {
    setButtonColor(newButtonColor);
  }

  return (
    <div className="App">
      <h1>Color button app</h1>
      <button
        className="ColorButton"
        style={{ backgroundColor: buttonColor, }}
        onClick={changeButtonColorHandler}
      >
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;
