import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          data-strk-img-id="hero-bg-8f2a9c"
          data-strk-img="[hero-subtitle] [hero-title]"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
          <div className="max-w-lg">
            <p className="text-velmora-gold-light font-sans text-xs tracking-widest uppercase mb-6">
              New Collection
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] mb-6">
              Crafted to be Treasured
            </h1>
            <p className="text-white/70 text-base md:text-lg font-light mb-10 leading-relaxed max-w-md">
              Demi-fine gold jewelry designed for the modern woman. Ethical, enduring, exquisitely made.
            </p>
            <Link to="/shop" className="btn-primary inline-block">
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Hidden text for image search */}
      <span id="hero-title" className="hidden">Velmora Fine Jewelry gold necklace earrings</span>
      <span id="hero-subtitle" className="hidden">warm lit close up gold jewelry on model editorial luxury</span>
    </section>
  )
}