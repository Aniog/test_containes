import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Features from './components/Features'
import About from './components/About'
import Testimonials from './components/Testimonials'
import CTABanner from './components/CTABanner'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-brand-900">
      <Navbar />
      <Hero />
      <Products />
      <Features />
      <About />
      <Testimonials />
      <CTABanner />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
