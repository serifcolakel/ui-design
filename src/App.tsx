import { useState } from 'react';

import './App.css';

import Button from './components/button/Button';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <div className="App">
      <Button buttonType="primary" onClick={increment} radius="full" size="xxl">
        Increment {count}
      </Button>
    </div>
  );
}

export default App;
