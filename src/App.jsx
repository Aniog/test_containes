import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/home/Hero'
import Products from './components/products/Products'
import Features from './components/home/Features'
import About from './components/home/About'
import CtaBanner from './components/home/CtaBanner'
import Contact from './components/home/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Products />
        <Features />
        <About />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
