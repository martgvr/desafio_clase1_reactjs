import './App.css';
import NavBar from './components/NavBar';

import * as React from 'react';
import Button from '@mui/material/Button';

function App() {
  return (
    <div>
      <NavBar />
      <div className="main__container">
        <h1>Material UI</h1>
        <h2>Prueba de funcionamiento</h2>
        <Button variant="contained">Clickear</Button>
      </div>
    </div>
  );
}

export default App;
