import { useState } from 'react';
import './App.css';

function App() {
  const [throwError, setThrowError] = useState(false);

  return throwError ? (
    new Error('catch me')
  ) : (
    <>
      <div className="title">Error Boundary</div>
      <button
        className="btn-errror"
        onClick={() => {
          setThrowError(true);
        }}
      >
        hit error
      </button>
    </>
  );
}

export default App;
