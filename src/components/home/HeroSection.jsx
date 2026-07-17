import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image - warm gold jewelry editorial */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-ink-900 via-ink-800 to-ink-950">
          <div className="absolute inset-0 bg-gradient-to-r from-gold-900/20 via-transparent to-gold-800/10" />
        </div>
        {/* Decorative gold gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-ink-950/20" />
      </div>

      {/* Decorative ring elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full border border-gold-400/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] sm:w-[550px] sm:h-[550px] rounded-full border border-gold-400/15" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
        <span className="text-gold-400/80 text-xs uppercase tracking-widestplus font-medium mb-6">
          Velmora Fine Jewelry
        </span>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream-50 font-light leading-tight tracking-wide">
          Crafted to be
          <br />
          <span className="font-semibold italic">Treasured</span>
        </h1>
        <p className="mt-6 text-cream-50/70 text-sm sm:text-base max-w-md leading-relaxed font-light tracking-wide">
          Demi-fine gold jewelry for the woman who finds beauty in simplicity and value in quality.
        </p>
        <Link
          to="/shop"
          className="mt-10 inline-flex items-center px-8 py-3.5 bg-gold-500 hover:bg-gold-600 text-ink-950 text-xs uppercase tracking-widestplus font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}