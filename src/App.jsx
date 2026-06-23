import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import './App.css'
import HomeHero from './components/home/HomeHero'
import Gallery from './components/home/Gallery'
import Features from './components/home/Features'

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/30" ref={containerRef}>
      <HomeHero />
      <Gallery />
      <Features />
      
      <footer className="py-12 text-center border-t border-white/10 mt-12 mb-8 text-slate-500">
        <p>© 2026 MicroCosmos. Exploring the unseen universe.</p>
      </footer>
    </main>
  )
}

export default App
