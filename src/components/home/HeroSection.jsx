import { Link } from "react-router-dom"

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe29b5e?w=1600&q=90"
          alt="Gold jewelry on warm background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-ivory/70 text-sm uppercase tracking-[0.2em] font-medium mb-5">
            Demi-Fine Jewelry
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-ivory font-light leading-[1.1] mb-6">
            Crafted to be
            <br />
            <span className="italic font-light text-warm-gold">Treasured</span>
          </h1>
          <p className="text-ivory/70 text-base sm:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            Each piece is designed with intention — warm gold, lasting quality,
            and a quiet elegance meant to be worn every day.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-warm-gold text-dark-charcoal text-xs uppercase tracking-[0.15em] font-medium px-10 py-4 hover:bg-warm-gold-light transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-12 bg-ivory/30 mx-auto" />
      </div>
    </section>
  )
}