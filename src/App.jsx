import './App.css'
import Navbar from './components/layout/Navbar'
import Hero from './components/home/Hero'
import Products from './components/home/Products'
import Features from './components/home/Features'
import Stats from './components/home/Stats'
import About from './components/home/About'
import Testimonials from './components/home/Testimonials'
import CtaBanner from './components/home/CtaBanner'
import Contact from './components/home/Contact'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Products />
      <Features />
      <Stats />
      <About />
      <Testimonials />
      <CtaBanner />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
