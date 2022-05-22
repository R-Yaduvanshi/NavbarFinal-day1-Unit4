import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from './components/Button';
import Links from './components/Links';
import Logo from './components/Logo';

function App() {
  return (
    <React.Fragment>
      <div className='navbar'>
        <Logo/>
        <Links/>
        <Button/>
      </div>
    </React.Fragment>
  );
}

export default App;
