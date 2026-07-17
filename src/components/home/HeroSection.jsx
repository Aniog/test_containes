import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1600&q=80"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-medium tracking-wide leading-tight">
          Crafted to be Treasured
        </h1>
        <p className="mt-5 text-sm md:text-base text-white/80 max-w-lg mx-auto leading-relaxed">
          Demi-fine gold jewelry designed for the everyday extraordinary. 
          For gifting, for self-love, for moments that matter.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-10 py-3.5 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/20"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 rounded-full border-2 border-white/40 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
