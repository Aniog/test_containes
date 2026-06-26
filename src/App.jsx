import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Features from '@/components/Features'
import About from '@/components/About'
import CtaBand from '@/components/CtaBand'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Features />
        <About />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
