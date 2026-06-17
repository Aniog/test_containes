import './App.css'
import Header from './components/home/Header'
import Hero from './components/home/Hero'
import Products from './components/home/Products'
import Features from './components/home/Features'
import CtaBanner from './components/home/CtaBanner'
import About from './components/home/About'
import Contact from './components/home/Contact'
import Footer from './components/home/Footer'

function App() {
  return (
    <div className="min-h-screen bg-navy-dark text-white">
      <Header />
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
