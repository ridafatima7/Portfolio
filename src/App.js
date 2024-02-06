import logo from './logo.svg';
import './App.css';
import React ,{useContext}from 'react';
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import Services from './Components/Services';
import Experiences from './Components/Experiences';
import Works from './Components/Works';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testimonials';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';
import { themeContext } from './Context';
function App() {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="App" style={{background:darkMode ? 'black' :'' ,color:darkMode ?'white':''}}>
      <Navbar />
      <Intro />
      <Services />
      <Experiences />
      <Works />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
