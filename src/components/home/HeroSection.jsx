import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=1600&q=85"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <p className="text-white/70 text-sm md:text-base tracking-[0.25em] uppercase mb-4 font-sans">
          Demi-Fine Jewelry
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif font-light leading-tight max-w-3xl">
          Crafted to be
          <br />
          <span className="italic font-light">Treasured</span>
        </h1>
        <p className="text-white/70 text-sm md:text-base mt-4 max-w-md leading-relaxed font-sans">
          Elevated essentials designed for the moments that matter — and the days in between.
        </p>
        <Link
          to="/shop"
          className="mt-10 inline-block bg-primary text-primary-foreground px-10 py-4 text-sm tracking-[0.12em] uppercase hover:bg-gold-600 transition-all duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}