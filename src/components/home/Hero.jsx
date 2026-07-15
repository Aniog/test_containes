import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Warm overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-obsidian-900/50 via-obsidian-900/30 to-obsidian-900/60" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">
        <p
          id="hero-eyebrow"
          className="font-sans text-xs uppercase tracking-widest3 text-velvet-300 mb-6 animate-fade-in"
        >
          New Collection · 2024
        </p>
        <h1
          id="hero-headline"
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream font-light leading-none mb-6 animate-slide-up"
          style={{ animationDelay: '0.1s' }}
        >
          Crafted to be<br />
          <em className="italic">Treasured</em>
        </h1>
        <p
          id="hero-subhead"
          className="font-sans text-sm md:text-base text-cream/80 mb-10 max-w-md mx-auto leading-relaxed animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          Demi-fine gold jewelry for the woman who wears her story. Hypoallergenic, 18K gold plated, made to last.
        </p>
        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Link to="/shop">
            <Button variant="solid" size="lg">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <span className="text-[10px] font-sans uppercase tracking-widest text-cream/50">Scroll</span>
        <div className="w-px h-8 bg-cream/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-cream/70 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
