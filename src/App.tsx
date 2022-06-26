import { useState } from 'react';
import { Description } from './components/Description';
import { Title } from './components/Title';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Title title="Live de React do Full Cycle" />
      <Description color="cyan" variant="sm">
        Live de React do Full Cycle
      </Description>
      <p>Contador de cliques: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Me clique
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Zera click
      </button>
    </div>
  );
}

export default App;
