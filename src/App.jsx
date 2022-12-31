import React from 'react';
import Router from './router/router';

function App() {
  console.log(import.meta.env.VITE_API);
  return (
    <>
      <Router />
    </>
  );
}

export default App;
