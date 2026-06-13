import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import CtaBanner from './components/CtaBanner'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <Features />
      <Testimonials />
      <About />
      <CtaBanner />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
