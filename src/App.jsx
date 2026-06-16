import './App.css'
import Header from './components/Header'
import Hero from './components/home/Hero'
import Products from './components/products/Products'
import Features from './components/home/Features'
import CtaBanner from './components/home/CtaBanner'
import About from './components/home/About'
import Contact from './components/home/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-surface-muted">
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
