import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/home/Hero'
import Products from './components/home/Products'
import Features from './components/home/Features'
import CTA from './components/home/CTA'
import About from './components/home/About'
import Contact from './components/home/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Products />
      <Features />
      <CTA />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
