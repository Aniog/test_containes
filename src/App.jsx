import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Products from './components/Products.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-[#f5f5f5]">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
