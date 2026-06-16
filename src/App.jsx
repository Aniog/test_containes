import './App.css'
import CapabilityHighlights from './components/home/CapabilityHighlights'
import ContactSection from './components/home/ContactSection'
import HomeHero from './components/home/HomeHero'
import ProcessSection from './components/home/ProcessSection'
import ProductGrid from './components/home/ProductGrid'

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <HomeHero />
      <ProductGrid />
      <CapabilityHighlights />
      <ProcessSection />
      <ContactSection />
    </main>
  )
}

export default App
