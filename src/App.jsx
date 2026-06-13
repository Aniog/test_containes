import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg text-text-secondary font-body antialiased">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
