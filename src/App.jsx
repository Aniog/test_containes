import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/home/Hero'
import Products from '@/components/products/Products'
import About from '@/components/about/About'
import Contact from '@/components/contact/Contact'
import Footer from '@/components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
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
