import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkingProcess from './components/WorkingProcess';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import TestimonialsBlog from './components/TestimonialsBlog';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <WorkingProcess />  
     <Portfolio/>
     <Pricing/>
     <TestimonialsBlog/> 
     <Footer/> 
    </div>
  );
}

export default App;