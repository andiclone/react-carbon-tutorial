import { useState } from 'react';
import './App.scss';
import { Button, Heading } from '@carbon/react';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  }

  const handleDecrease = () => {
    setCount(count - 1);
  }

  const handleReset = () => {
    setCount(0);
  }

  return (
    <div className="App">
      <Heading className="App-header">
        <h1>Buttons to increase or decrease counter</h1>
        <Button kind="danger--tertiary" onClick={handleIncrease}> Increase </Button>
        <button onClick={handleDecrease}> Decrease </button>
        <button onClick={handleReset}> Reset </button>
        <p> Button has been clicked {count} times.</p>
      </Heading>
    </div>
  );
}

export default App;
