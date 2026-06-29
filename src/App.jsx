import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/home/Hero'
import Products from './components/products/Products'
import Features from './components/home/Features'
import About from './components/home/About'
import CtaBanner from './components/home/CtaBanner'
import Contact from './components/home/Contact'

function App() {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark">
      <Navbar />
      <Hero />
      <Products />
      <Features />
      <About />
      <CtaBanner />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
