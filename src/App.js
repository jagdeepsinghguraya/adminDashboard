import './App.css';
import Menu from './component/Menu';
import Dashboard from './component/Dashboard'
import React from 'react';

function App() {
  return (
    <div className="App">      
      <div className="AppGlass">
      <Menu />
      <Dashboard />
      </div>
    </div>
  );
}

export default App;