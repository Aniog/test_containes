import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1600&q=80"
          alt="Gold jewelry editorial"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight">
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-sm md:text-base text-white/70 mt-6 max-w-md mx-auto leading-relaxed">
          Demi-fine gold jewelry designed for the moments that matter. Timeless pieces, accessible luxury.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 bg-accent text-white font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-accent-dark transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
