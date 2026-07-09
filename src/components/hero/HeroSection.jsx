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
        data-strk-bg-id="hero-bg-mc7x9a"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ opacity: 0.3 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-midnight/40 to-midnight z-[1]" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Microscope className="w-12 h-12 text-primary mr-3" />
          <span className="text-primary font-heading text-lg tracking-widest uppercase">Explore the Invisible</span>
        </div>

        <h1
          id="hero-title"
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary tracking-tight mb-6"
        >
          Micro<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Cosmos</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-text-secondary text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-10"
        >
          Journey into the breathtaking world hidden beneath our eyes — where cells dance, bacteria glow, and life unfolds at scales beyond imagination.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-primary text-midnight font-semibold rounded-full hover:bg-glow transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
            Start Exploring
          </button>
          <button className="px-8 py-3 border border-text-secondary/30 text-text-primary rounded-full hover:border-primary hover:text-primary transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-text-secondary/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
