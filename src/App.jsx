import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Featured from './components/Featured'
import Categories from './components/Categories'
import Facts from './components/Facts'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#050d1a]">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Featured />
      <Categories />
      <Facts />
      <Footer />
    </div>
  )
}

export default App
