import Header from './components/home/Header'
import Hero from './components/home/Hero'
import ProductGrid from './components/products/ProductGrid'
import Features from './components/home/Features'
import About from './components/home/About'
import Testimonials from './components/home/Testimonials'
import CtaBanner from './components/home/CtaBanner'
import Contact from './components/home/Contact'
import Footer from './components/home/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <Header />
      <Hero />
      <ProductGrid />
      <Features />
      <About />
      <Testimonials />
      <CtaBanner />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
