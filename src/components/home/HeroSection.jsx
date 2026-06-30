import { Link } from "react-router-dom"

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141589-6773a11d78b7?w=1920&q=85"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="animate-fade-in-up max-w-3xl">
          <p className="text-brand-gold text-xs sm:text-sm font-sans uppercase tracking-[0.2em] mb-4 sm:mb-6">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-white font-light leading-tight mb-4 sm:mb-6">
            Crafted to be
            <br />
            <span className="italic font-medium">Treasured</span>
          </h1>
          <p className="text-brand-white/70 font-sans text-sm sm:text-base max-w-md mx-auto mb-8 sm:mb-10 leading-relaxed">
            Demi-fine gold jewelry made for wearing every day, forever.
            Each piece tells a story of quiet luxury.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-brand-gold text-brand-white font-sans text-sm uppercase tracking-[0.15em] px-10 py-3.5 hover:bg-brand-goldDark transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-white/40 rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-brand-white/60 rounded-full" />
        </div>
      </div>
    </section>
  )
}