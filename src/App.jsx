import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ChampionsSection from './components/ChampionsSection'
import RolesSection from './components/RolesSection'
import EsportsSection from './components/EsportsSection'
import RegionsSection from './components/RegionsSection'
import NewsSection from './components/NewsSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-lol-bg text-lol-text">
      <Navbar />
      <HeroSection />
      <ChampionsSection />
      <RolesSection />
      <EsportsSection />
      <RegionsSection />
      <NewsSection />
      <Footer />
    </div>
  )
}

export default App
