import './App.css'
import Navbar from './components/microcosmos/Navbar'
import Hero from './components/microcosmos/Hero'
import Stats from './components/microcosmos/Stats'
import Explore from './components/microcosmos/Explore'
import Gallery from './components/microcosmos/Gallery'
import ImageBand from './components/microcosmos/ImageBand'
import Discoveries from './components/microcosmos/Discoveries'
import DropOfWater from './components/microcosmos/DropOfWater'
import About from './components/microcosmos/About'
import Footer from './components/microcosmos/Footer'

function App() {
  return (
    <div className="min-h-screen bg-cosmos-bg text-cosmos-text">
      <Navbar />
      <Hero />
      <Stats />
      <Explore />
      <ImageBand />
      <Gallery />
      <DropOfWater />
      <Discoveries />
      <About />
      <Footer />
    </div>
  )
}

export default App
