import './App.css'
import Navbar from './components/microcosmos/Navbar.jsx'
import Hero from './components/microcosmos/Hero.jsx'
import Stats from './components/microcosmos/Stats.jsx'
import Specimens from './components/microcosmos/Specimens.jsx'
import Habitats from './components/microcosmos/Habitats.jsx'
import Feature from './components/microcosmos/Feature.jsx'
import Gallery from './components/microcosmos/Gallery.jsx'
import Footer from './components/microcosmos/Footer.jsx'

function App() {
  return (
    <div id="top" className="min-h-screen bg-[#0a0f14] text-[#e8eef4]">
      <Navbar />
      <Hero />
      <Stats />
      <Specimens />
      <Habitats />
      <Feature />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
