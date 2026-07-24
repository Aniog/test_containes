import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] lg:h-screen min-h-[600px] overflow-hidden bg-midnight-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=1600&q=85"
          alt="Gold jewelry close-up"
          className="w-full h-full object-cover opacity-70"
          style={{ objectPosition: '50% 30%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight-950/80 via-midnight-950/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/60 via-transparent to-midnight-950/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 w-full">
          <div className="max-w-lg">
            <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-gold-300/80 mb-5">
              New Collection
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-cream leading-[1.08] font-light text-balance">
              Crafted to be
              <br />
              <span className="italic font-light">Treasured</span>
            </h1>
            <p className="mt-5 text-sm sm:text-base text-cream/70 leading-relaxed max-w-sm font-light">
              Demi-fine gold jewelry, hand-finished for those who appreciate
              quiet luxury. Elevated essentials, made to last.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="btn-primary group text-xs"
              >
                Shop the Collection
                <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/shop"
                className="btn-outline text-xs text-cream border-cream/30 hover:border-cream/60 hover:text-cream"
              >
                View Bestsellers
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[9px] tracking-[0.2em] uppercase text-cream/40">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-cream/40 to-transparent" />
      </div>
    </section>
  )
}