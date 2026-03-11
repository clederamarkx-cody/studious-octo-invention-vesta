import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Onboarding from './components/Onboarding';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="antialiased bg-black min-h-screen text-white font-sans selection:bg-blue-900 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Onboarding />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
