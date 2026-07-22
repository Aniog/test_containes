import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-secondary"
        data-strk-bg-id="hero-bg-2a3b4c"
        data-strk-bg="[hero-subtitle] [hero-title] close-up gold jewelry on model warm lighting elegant editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" /> {/* Subtle overlay for text readability */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <h1 id="hero-title" className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wide drop-shadow-sm">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="font-sans text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-light tracking-wide drop-shadow-sm">
          Quiet luxury demi-fine jewelry designed for the modern individual. Ethical, beautiful, and made to last.
        </p>
        <Button asChild size="lg" className="rounded-none px-10 py-6 text-sm tracking-[0.2em] uppercase bg-primary hover:bg-background hover:text-foreground text-primary-foreground transition-all duration-500">
          <Link to="/shop">Shop the Collection</Link>
        </Button>
      </div>

      {/* Trust Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-background/80 backdrop-blur-md border-t border-white/10 z-20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs md:text-sm tracking-widest uppercase font-medium">
            <span className="flex items-center gap-2">Free Worldwide Shipping</span>
            <span className="hidden md:inline text-primary/50">·</span>
            <span className="flex items-center gap-2">30-Day Returns</span>
            <span className="hidden md:inline text-primary/50">·</span>
            <span className="flex items-center gap-2">18K Gold Plated</span>
            <span className="hidden md:inline text-primary/50">·</span>
            <span className="flex items-center gap-2">Hypoallergenic</span>
          </div>
        </div>
      </div>
    </section>
  )
}
