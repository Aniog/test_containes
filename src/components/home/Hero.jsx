import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-espresso">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-transparent to-espresso/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-ivory leading-tight">
          Crafted to be Treasured
        </h1>
        <p className="mt-6 text-ivory/80 font-sans text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Demi-fine jewelry designed for the modern woman. Timeless pieces that elevate your everyday.
        </p>
        <Link
          to="/collection"
          className="inline-block mt-10 bg-gold text-espresso font-sans text-sm font-medium tracking-wide uppercase px-10 py-4 hover:bg-gold-light transition-colors"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-8 bg-ivory/30 animate-pulse" />
      </div>
    </section>
  )
}

export default Hero
