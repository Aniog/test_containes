import Navbar from './components/landing/Navbar'
import Hero from './components/landing/Hero'
import Features from './components/landing/Features'
import Templates from './components/landing/Templates'
import Pricing from './components/landing/Pricing'
import Testimonials from './components/landing/Testimonials'
import CTA from './components/landing/CTA'
import Footer from './components/landing/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Templates />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
