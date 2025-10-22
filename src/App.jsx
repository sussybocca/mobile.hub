import React from 'react';
import Emulator from './components/Emulator.jsx';
import './styles/global.css';

function App() {
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Android Emulator Web</h1>
      <Emulator />
    </div>
  );
}

export default App;
