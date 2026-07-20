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
    <section className="relative h-screen min-h-[600px] flex items-center justify-center" ref={containerRef}>
      {/* Background Image using data-strk-bg */}
      <div className="absolute inset-0 z-0 bg-neutral-900">
        <div 
          className="w-full h-full bg-center bg-cover bg-no-repeat opacity-70"
          data-strk-bg-id="home-hero-bg"
          data-strk-bg="[hero-subhead] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-20">
        <h1 
          id="hero-title"
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p 
          id="hero-subhead"
          className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-light"
        >
          Demi-fine gold jewelry for the modern woman. Everyday elegance, made to last.
        </p>
        <Button asChild size="lg" className="rounded-none px-12 h-14 bg-primary hover:bg-white hover:text-black text-primary-foreground border border-transparent transition-colors font-medium tracking-wide uppercase text-sm">
          <Link to="/shop">Shop the Collection</Link>
        </Button>
      </div>
    </section>
  )
}
