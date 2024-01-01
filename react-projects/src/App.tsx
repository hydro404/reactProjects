
import { useState } from 'react';
import './App.css'

function generateRandomHexColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function App() {
  const [bodyColor, setBodyColor] = useState('');

  const changeBackgroundColor = () => {
    const newColor = generateRandomHexColor();
    setBodyColor(newColor);
  };
  return (
    <>
      <h1 className="black" >Color Flip</h1>
      <div className="card">
        <button onClick={changeBackgroundColor}> Flip
        <style>{`
          body {
            background-color: ${bodyColor} !important;
          }
        `}
        </style>
        </button>
        {/* <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p> */}
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
