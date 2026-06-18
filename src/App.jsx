import './App.css'
import Navbar from './components/home/Navbar'
import Hero from './components/home/Hero'
import Features from './components/home/Features'
import Products from './components/home/Products'
import About from './components/home/About'
import Testimonials from './components/home/Testimonials'
import Contact from './components/home/Contact'
import Footer from './components/home/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
