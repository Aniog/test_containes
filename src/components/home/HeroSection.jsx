import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1600&q=80"
          alt="Gold jewelry close-up"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-velvet-950/70 via-velvet-950/40 to-velvet-950/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <p className="font-sans text-xs tracking-widest uppercase text-gold-300 mb-4">
              Velmora Fine Jewelry
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight font-light">
              Crafted to be
              <span className="italic font-medium block mt-1">Treasured</span>
            </h1>
            <p className="font-sans text-base md:text-lg text-velvet-200 mt-6 max-w-md leading-relaxed">
              Demi-fine gold jewelry designed for everyday elegance. Each piece is thoughtfully crafted to become part of your story.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center font-sans text-sm tracking-widest uppercase bg-gold-500 text-white px-10 py-4 hover:bg-gold-600 transition-all duration-300"
              >
                Shop the Collection
              </Link>
              <Link
                to="/shop?category=best-sellers"
                className="inline-flex items-center justify-center font-sans text-sm tracking-widest uppercase border-2 border-white/30 text-white px-10 py-4 hover:bg-white/10 transition-all duration-300"
              >
                Bestsellers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}