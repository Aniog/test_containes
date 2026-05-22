import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HomeHero() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p id="hero-subtitle" className="text-amber-400 font-semibold text-lg mb-3 tracking-wide uppercase">
          Authentic Neapolitan Pizza
        </p>
        <h1 id="hero-title" className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Wood-Fired Pizza<br />Made with Love
        </h1>
        <p className="text-stone-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Crafted from generations-old recipes, using imported Italian flour, San Marzano tomatoes, and fresh buffalo mozzarella.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/store">
            <Button size="lg" className="w-full sm:w-auto">Order Now</Button>
          </Link>
          <Link to="/booking">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
              Book a Table
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
