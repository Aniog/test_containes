import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GallerySection from './components/GallerySection'
import Footer from './components/Footer'

import { cellularGallery, insectGallery, textureGallery } from './data'

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      <Navbar />
      
      <main>
        <Hero />
        
        <GallerySection 
          id="cellular"
          title="The Cellular Level"
          subtitle="Explore the fundamental building blocks of all living organisms. From nerve networks to DNA strands, life begins here."
          items={cellularGallery}
          dark={false}
        />

        <GallerySection 
          id="insects"
          title="The Miniature Wildlife"
          subtitle="A closer look reveals aliens living among us. Insects boast complex structures and mesmerizing colors."
          items={insectGallery}
          dark={true}
        />

        <GallerySection 
          id="textures"
          title="Microscopic Textures"
          subtitle="From seemingly smooth surfaces to perfect crystals, the non-living world holds surprising hidden geometry."
          items={textureGallery}
          dark={false}
        />
      </main>

      <Footer />
    </div>
  )
}

export default App
