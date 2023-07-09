import { useState } from 'react';

import './App.css';

import { Checkbox, Button } from './components';

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
      <Checkbox intent="error" label="TEST" />
    </div>
  );
}

export default App;
