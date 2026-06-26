import './App.css'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import Products from '@/components/sections/Products'
import About from '@/components/sections/About'
import Features from '@/components/sections/Features'
import CTA from '@/components/sections/CTA'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <About />
        <Features />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
