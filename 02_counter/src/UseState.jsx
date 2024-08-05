import { useState } from 'react';
import './UseState.css';

function UseState() {
  const [counter, setCounter] = useState(15);
  const addValue = () => {
    setCounter(counter + 1);
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter} </h2>
      <button
        onClick={addValue}>Add Value</button><br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export { UseState };
