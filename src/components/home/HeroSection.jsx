import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=85"
          alt="Gold jewelry on warm background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <p className="text-gold-300 text-xs uppercase tracking-[0.25em] font-medium mb-4 animate-fade-in">
              Velmora Fine Jewelry
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-serif font-light leading-[1.1] tracking-wide animate-slide-up">
              Crafted to
              <br />
              <span className="text-gold-300">Be Treasured</span>
            </h1>
            <p className="mt-6 text-white/80 text-lg font-light leading-relaxed max-w-md animate-fade-in">
              Demi-fine gold jewelry designed for everyday elegance. Each piece is thoughtfully made to be worn, loved, and passed on.
            </p>
            <div className="mt-8 animate-slide-up">
              <Link
                to="/shop"
                className="btn-accent inline-block"
              >
                Shop the Collection
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-[1px] h-12 bg-white/30" />
      </div>
    </section>
  )
}