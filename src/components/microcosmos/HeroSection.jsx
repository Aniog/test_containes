import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Microscope } from 'lucide-react'

const HeroSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc01a9"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-cosmos-deeper/80 via-cosmos-dark/60 to-cosmos-dark" />

      <div className="relative z-20 text-center max-w-5xl mx-auto px-4 md:px-8">
        <div className="flex justify-center mb-6">
          <Microscope className="w-12 h-12 md:w-16 md:h-16 text-cosmos-cyan" />
        </div>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-cosmos-cyan via-cosmos-purple to-cosmos-magenta bg-clip-text text-transparent"
        >
          MicroCosmos
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-2xl font-light text-cosmos-muted max-w-3xl mx-auto leading-relaxed"
        >
          Explore the breathtaking hidden universe that exists beyond the reach of the naked eye — a world of extraordinary beauty, complexity, and wonder.
        </p>
        <div className="mt-10 flex justify-center">
          <a
            href="#explore"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cosmos-cyan/10 border border-cosmos-cyan/30 text-cosmos-cyan font-medium hover:bg-cosmos-cyan/20 hover:border-cosmos-cyan/50 transition-all duration-300"
          >
            Begin Exploration
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
