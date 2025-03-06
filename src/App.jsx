import React from 'react';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Contact } from './components/Contact/Contact';
import { Arrowup } from './components/Arrowup/Arrowup';
import { Skills } from './components/Skills/Skills';
import { Education } from './components/Education/Education';
import { Certification } from './components/Certification/Certification';
import { Recommandation } from './components/Recommandation/Recommandation';
function App() {

  return (
    <>
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Education/>
      <Certification/>
      <Recommandation/>
      <Contact/>
      <Arrowup/>
    </div>
    </>
  )
}

export default App
