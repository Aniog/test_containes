import './App.css'
import Navbar from './components/home/Navbar'
import Hero from './components/home/Hero'
import Products from './components/home/Products'
import About from './components/home/About'
import Features from './components/home/Features'
import Contact from './components/home/Contact'
import Footer from './components/home/Footer'

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Features />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
