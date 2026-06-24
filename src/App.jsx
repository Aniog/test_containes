import './App.css'
import HomeHero from './components/home/HomeHero'
import HomeGallery from './components/home/HomeGallery'
import HomeFeatures from './components/home/HomeFeatures'
import HomeFooter from './components/home/HomeFooter'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0e17] text-slate-100">
      <HomeHero />
      <HomeGallery />
      <HomeFeatures />
      <HomeFooter />
    </div>
  )
}

export default App
