import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=85"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-3xl animate-fade-in-up">
          <p className="text-white/80 text-xs md:text-sm uppercase tracking-[0.2em] mb-6 font-sans">
            Demi-Fine Gold Jewelry
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/70 text-sm md:text-base max-w-lg mx-auto mb-10 font-sans leading-relaxed">
            Timeless demi-fine jewelry designed for everyday elegance. Each piece is 18K gold-plated and crafted to last.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-velmora-gold hover:bg-velmora-gold-dark text-white text-xs uppercase tracking-[0.2em] px-10 py-4 transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-8 bg-white/40" />
      </div>
    </section>
  )
}