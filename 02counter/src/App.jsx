import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(15);
  const addValue = () => {
  };
  return (
    <>
      <h1>CHai Aur React</h1>
      <h2>Counter Value: {setCounter} </h2>
      <button
        onClick={addValue}>Add Value</button><br />
      <button>Remove Value</button>
    </>
  );
}

export default App;
