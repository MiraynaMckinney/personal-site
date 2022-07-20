
import './App.css';
import './pages/Home.css'
import React, { useState } from "react";
import { Navbar, NavMobile } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import {Home, HomeMobile} from './pages/Home';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';


const themes = {
  light: lightTheme,
  dark: darkTheme
}

function App() {
  const [theme, setTheme] = useState("light");
  const bc = theme === "light" ? "#dfdfdf" : "#2b2b2b";
  document.documentElement.style.setProperty(`--main-color`, `${bc}`);
  const width = window.innerWidth;
  const breakpoint = 850;
  console.log(width);
  return width < breakpoint ?
    <ThemeProvider theme={themes[theme]}>
      <div className='app'>
        <header>
          <NavMobile theme={theme} setTheme={setTheme} style={{ postion: 'relative', backgroundColor: 'transparent' }} />
        </header>
        <Routes >
          <Route exact path="/" element={<HomeMobile className="routepages" theme={themes[theme]} />} />
          <Route exact path="/skills" element={<Skills className="routepages" theme={themes[theme]} />} />
          <Route exact path="/contact" element={<Contact className="routepages" theme={themes[theme]} />} />
        </Routes>
      </div>
    </ThemeProvider>

    :

    <ThemeProvider theme={themes[theme]}>
      <div className='app'>
        <header>
          <Navbar theme={theme} setTheme={setTheme} style={{ postion: 'relative', backgroundColor: 'transparent' }} />
        </header>
        <Routes >
          <Route exact path="/" element={<Home className="routepages" theme={themes[theme]} />} />
          <Route exact path="/skills" element={<Skills className="routepages" theme={themes[theme]} />} />
          <Route exact path="/contact" element={<Contact className="routepages" theme={themes[theme]} />} />
        </Routes>
      </div>
    </ThemeProvider>
}
export default App;