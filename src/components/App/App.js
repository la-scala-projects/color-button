import './App.css';
import {useState} from 'react';

export const replaceCamelWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
};

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [buttonIsDisabled, setButtonIsDisabled] = useState(false);
  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  const changeButtonColorHandler = () => {
    setButtonColor(newButtonColor);
  }

  const checkboxClickHandler = (event) => {
    setButtonIsDisabled(event.target.checked);
  }

  return (
    <div className="App">
      <h1>Color button app</h1>
      <button
        className="ColorButton"
        style={{ backgroundColor: !buttonIsDisabled ? buttonColor : 'gray', }}
        onClick={changeButtonColorHandler}
        disabled={buttonIsDisabled}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <label className="Checkbox">
        <input
          onChange={checkboxClickHandler}
          type="checkbox"
          defaultChecked={buttonIsDisabled}
          aria-checked={buttonIsDisabled}
        />
          Disable button
      </label>
    </div>
  );
}

export default App;
