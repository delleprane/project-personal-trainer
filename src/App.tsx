import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Menu } from './Components/Menu';
import { Banner } from './Components/Banner';
import { About } from './Components/About';
import { ClassesMap } from './Components/ClassesMap';
import { Reviews } from './Components/Reviews';
import { Contact } from './Components/Contact';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Menu />
        <Banner/>
        <About/>
        <ClassesMap/>
        <Reviews/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
