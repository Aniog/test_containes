import Navbar from './components/layout/Navbar'
import Hero from './components/home/Hero'
import Products from './components/products/Products'
import Features from './components/home/Features'
import CtaBanner from './components/home/CtaBanner'
import About from './components/home/About'
import Contact from './components/home/Contact'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-dark">
      <Navbar />
      <Hero />
      <Products />
      <Features />
      <CtaBanner />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
