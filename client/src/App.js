import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Button to increase counter</h1>
        <button onClick={handleClick}> Clieck Me!</button>
        <p> Button has been clicked {count} times.</p>
      </header>
    </div>
  );
}

export default App;
