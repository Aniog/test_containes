import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useImageLoader } from '@/hooks/useImageLoader.jsx'

function HeroSection() {
  const containerRef = useRef(null)
  useImageLoader(containerRef, [])

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-velmora-ink text-velmora-pearl">
      <div
        className="absolute inset-0 bg-velmora-ink"
        data-strk-bg-id="velmora-hero-bg-a7f3c1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-ink via-velmora-ink/70 to-velmora-ink/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,146,99,0.18),transparent_26%)]" />

      <div className="velmora-container relative flex min-h-screen items-end py-28 pb-20 sm:pb-24 lg:items-center">
        <div className="max-w-2xl pt-24">
          <p className="velmora-eyebrow text-velmora-pearl/76">Demi-fine jewelry for everyday keeps</p>
          <h1 id="hero-title" className="mt-6 font-display text-6xl leading-[0.95] text-velmora-pearl sm:text-7xl lg:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-pearl/78 sm:text-lg">
            Warm gold finishes, thoughtful silhouettes, and elegant details designed for gifting and self-purchase alike.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/shop" className="velmora-button-primary bg-velmora-gold text-velmora-pearl hover:bg-velmora-pearl hover:text-velmora-ink">
              Shop the Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link to="/about" className="velmora-button-secondary border-velmora-pearl/30 bg-transparent text-velmora-pearl hover:border-velmora-gold hover:text-velmora-gold">
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
