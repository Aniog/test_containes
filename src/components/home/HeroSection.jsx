import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-espresso">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'linear-gradient(to bottom, rgba(26, 24, 23, 0.35), rgba(26, 24, 23, 0.55))',
          }}
        />
        {/* Warm gold gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/30 via-transparent to-espresso/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full section-padding">
        <div className="max-w-2xl">
          <p className="text-gold-pale/80 text-xs tracking-[0.25em] uppercase mb-6 animate-fade-in">
            Demi-Fine Jewelry
          </p>
          <h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-light leading-[1.05] mb-6 animate-slide-up"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Crafted to be<br />Treasured
          </h1>
          <p className="text-cream/70 text-base md:text-lg max-w-lg mb-10 animate-fade-in leading-relaxed">
            Discover demi-fine gold jewelry designed for the modern woman — where everyday elegance meets lasting quality.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-espresso text-sm tracking-[0.15em] uppercase font-medium hover:bg-gold-pale transition-colors duration-300 animate-slide-up"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/40">
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-cream/20" />
      </div>
    </section>
  );
}