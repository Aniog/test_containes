import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-main-7a3f2c"
        data-strk-bg="[hero-subtitle] [hero-title] luxury gold jewelry campaign"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="w-full h-full bg-gradient-to-b from-brand-charcoal via-brand-dark-gray to-brand-black" />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-brand-gold text-xs tracking-widest-2xl uppercase mb-6 font-medium">
          Demi-Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-text-light font-light leading-tight mb-6"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-brand-muted-dark text-sm sm:text-base max-w-lg mx-auto mb-10 leading-relaxed"
        >
          18K gold plated jewelry designed for everyday elegance. Hypoallergenic,
          tarnish-resistant, and made to last.
        </p>
        <Link to="/shop">
          <Button variant="primary" size="lg">
            Shop the Collection
          </Button>
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-12 bg-brand-gold/50 mx-auto animate-pulse" />
      </div>
    </section>
  )
}
