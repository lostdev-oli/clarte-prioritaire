import { useState } from 'react';


/**
 * Root component of the application.
 */
export function App(): JSX.Element {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Clarté Prioritaire</h1>
      <div className="p-8">
        <button
          className="rounded bg-primary px-4 py-2 font-semibold text-white"
          onClick={() => setCount((c) => c + 1)}
        >
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
