import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden">
      {/* Background gradient + placeholder image effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-800/60 via-stone-900/40 to-stone-900/70 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"><rect fill="#1c1917" width="1600" height="900"/><circle cx="600" cy="400" r="300" fill="#34241e"/><circle cx="950" cy="500" r="200" fill="#62473c"/><rect x="0" y="0" width="1600" height="900" fill="url(#g)"/><defs><radialGradient id="g"><stop offset="0%" stop-color="#b07532" stop-opacity="0.3"/><stop offset="100%" stop-color="#1c1917" stop-opacity="0.9"/></radialGradient></defs></svg>`
          )})`,
        }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-3xl mx-auto">
        <p className="text-warm-300 text-xs tracking-[0.28em] uppercase mb-5 animate-fade-in">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light leading-[1.1] mb-6 animate-slide-up">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-stone-300 text-sm md:text-base max-w-lg mx-auto leading-relaxed mb-9 animate-slide-up">
          Premium demi-fine jewelry designed for the modern woman. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block btn-accent animate-slide-up"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-[1px] h-12 bg-white/30" />
      </div>
    </section>
  );
}
