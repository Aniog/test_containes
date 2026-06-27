import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&h=1000&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-velmora-cream px-4 max-w-2xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase mb-4 text-velmora-cream/80">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-wide">
          Crafted to be<br />Treasured
        </h1>
        <p className="mt-6 text-sm sm:text-base text-velmora-cream/80 max-w-md mx-auto leading-relaxed">
          Everyday luxury, thoughtfully designed. Pieces that move with you, from morning light to midnight.
        </p>
        <div className="mt-10">
          <Link to="/shop">
            <Button variant="accent" size="xl">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-velmora-cream/60">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-velmora-cream/60 mx-auto" />
      </div>
    </section>
  )
}
