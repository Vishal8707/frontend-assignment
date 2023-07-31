import React, { useState } from 'react';
import LeftSection from './components/LeftSection';
import MiddleSection from './components/MiddleSection';
import RightSection from './components/RightSection';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`}>
      <header>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </header>
      <div className="container">
        <LeftSection />
        <MiddleSection />
        <RightSection />
      </div>
    </div>
  );
};

export default App;
