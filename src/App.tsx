import { useState } from 'react';
import './App.css';

/**
 * Root component of the application.
 */
export function App(): JSX.Element {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Clarté Prioritaire</h1>
      <div className="card">
        <button onClick={() => setCount((c) => c + 1)}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
