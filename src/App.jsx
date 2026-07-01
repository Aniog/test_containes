import './App.css'
import Navbar from './components/layout/Navbar'
import Hero from './components/home/Hero'
import Features from './components/home/Features'
import About from './components/home/About'
import Contact from './components/home/Contact'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
