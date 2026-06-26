import './App.css'
import Navbar from '@/components/Navbar'
import Hero from '@/sections/Hero'
import Products from '@/sections/Products'
import Features from '@/sections/Features'
import About from '@/sections/About'
import Contact from '@/sections/Contact'
import Footer from '@/sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Features />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
