import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1600&auto=format"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950/60 via-dark-950/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950/40 via-transparent to-dark-950/20" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl">
            <p className="text-goldLight text-sm md:text-base tracking-widest uppercase font-sans font-medium mb-4">
              New Collection
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream leading-tight mb-6">
              Crafted to be<br />Treasured
            </h1>
            <p className="text-cream/80 text-base md:text-lg leading-relaxed mb-8 max-w-md">
              Demi-fine gold jewelry, made for the moments that matter. 
              Each piece designed to be worn, loved, and passed down.
            </p>
            <Link
              to="/shop"
              className="btn-accent inline-block text-center"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-12 bg-cream/40 animate-pulse" />
      </div>
    </section>
  )
}