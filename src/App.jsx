import './App.css'
import Navbar from './components/nav/Navbar'
import Hero from './components/hero/Hero'
import Products from './components/products/Products'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="min-h-screen">
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
