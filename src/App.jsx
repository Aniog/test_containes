import './App.css'
import Navbar from './components/layout/Navbar'
import Hero from './components/home/Hero'
import Products from './components/products/Products'
import Features from './components/features/Features'
import About from './components/about/About'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-surface-50">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Features />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
