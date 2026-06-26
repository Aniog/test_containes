import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/home/Hero'
import SpecsBanner from './components/home/SpecsBanner'
import Products from './components/products/Products'
import WhyUs from './components/home/WhyUs'
import About from './components/home/About'
import CtaBanner from './components/home/CtaBanner'
import Contact from './components/home/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <SpecsBanner />
        <Products />
        <WhyUs />
        <About />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
