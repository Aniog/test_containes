import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Features from './components/Features'
import Specs from './components/Specs'
import Process from './components/Process'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-stone-50 text-neutral-900 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Features />
        <Specs />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
