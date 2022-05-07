import './App.css';
import {useState} from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [buttonIsDisabled, setButtonIsDisabled] = useState(checkboxChecked);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const changeButtonColorHandler = () => {
    setButtonColor(newButtonColor);
  }

  const checkboxClickHandler = () => {
    setButtonIsDisabled((prevDisabled) => !prevDisabled)
    setCheckboxChecked((prevCheckboxChecked) => !prevCheckboxChecked);
  }

  return (
    <div className="App">
      <h1>Color button app</h1>
      <button
        className="ColorButton"
        style={{ backgroundColor: buttonColor, }}
        onClick={changeButtonColorHandler}
        disabled={buttonIsDisabled}
      >
        Change to {newButtonColor}
      </button>
      <label className="Checkbox">
        <input checked={checkboxChecked} onChange={checkboxClickHandler} type="checkbox"/>
        {!checkboxChecked ? 'Disable' : 'Enable'} button
      </label>
    </div>
  );
}

export default App;
