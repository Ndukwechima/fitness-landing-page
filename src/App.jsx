import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Transformation from './components/Transformation'
import CoachSection from './components/CoachSection'
import TestimonialsSection from './components/TestimonialsSection'
import ParallaxSection from './components/ParallaxSection'
import FAQSection from './components/FAQSection'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Transformation />
      <CoachSection />
      <TestimonialsSection />
      <ParallaxSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
   
    </div>
  )
}

export default App