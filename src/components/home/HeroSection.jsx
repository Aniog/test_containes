import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px] max-h-[900px] overflow-hidden bg-gradient-to-br from-velmora-black via-velmora-charcoal to-velmora-black">
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full section-padding flex items-center">
        <div className="max-w-xl animate-fade-in">
          <p className="text-velmora-gold-light text-xs tracking-widest-2xl uppercase font-medium mb-4">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
            Crafted to be<br />
            <span className="italic font-light">Treasured</span>
          </h1>
          <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8 max-w-md">
            Demi-fine 18K gold-plated jewelry designed for the modern woman. Hypoallergenic, timeless, and crafted to elevate every moment.
          </p>
          <Link to="/shop" className="btn-primary">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/30" />
      </div>
    </section>
  )
}
