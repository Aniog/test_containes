import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Categories from './components/Categories'
import Specimens from './components/Specimens'
import Facts from './components/Facts'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-cosmos-bg min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Categories />
      <Specimens />
      <Facts />
      <Footer />
    </div>
  )
}

export default App
