import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
          alt="Velmora Fine Jewelry"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/40 via-charcoal-900/20 to-charcoal-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <p className="text-cream-100/80 text-sm tracking-extra-wide uppercase mb-4">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream-50 leading-tight mb-6">
          Crafted to be Treasured
        </h1>
        <p className="text-cream-100/90 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light">
          Timeless pieces designed for the modern woman. 18K gold plated, hypoallergenic jewelry that elevates every moment.
        </p>
        <Link to="/shop">
          <Button
            variant="accent"
            size="lg"
            className="text-charcoal-900"
          >
            Shop the Collection
          </Button>
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream-100/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-cream-100/70 rounded-full" />
        </div>
      </div>
    </section>
  )
}
