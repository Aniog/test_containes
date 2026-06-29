import Header from './components/home/Header'
import Hero from './components/home/Hero'
import ProductGrid from './components/products/ProductGrid'
import Features from './components/home/Features'
import CtaBanner from './components/home/CtaBanner'
import About from './components/home/About'
import Contact from './components/home/Contact'
import Footer from './components/home/Footer'

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <ProductGrid />
      <Features />
      <CtaBanner />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
