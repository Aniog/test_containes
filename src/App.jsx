import './App.css'
import Navbar from './components/microcosmos/Navbar'
import Hero from './components/microcosmos/Hero'
import Gallery from './components/microcosmos/Gallery'
import Worlds from './components/microcosmos/Worlds'
import Science from './components/microcosmos/Science'
import PhotoStrip from './components/microcosmos/PhotoStrip'
import Facts from './components/microcosmos/Facts'
import Explore from './components/microcosmos/Explore'
import Footer from './components/microcosmos/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <Hero />
      <Gallery />
      <Worlds />
      <Science />
      <PhotoStrip />
      <Facts />
      <Explore />
      <Footer />
    </div>
  )
}

export default App
