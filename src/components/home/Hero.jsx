import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="luxury gold jewelry close-up warm lighting editorial photography"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 bg-velmora-espresso"
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <p className="font-sans text-[10px] uppercase tracking-widest-2xl text-velmora-gold-light mb-4 animate-fade-in">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-display text-white mb-6 animate-slide-up">
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-sm md:text-body-lg text-white/80 mb-8 max-w-md mx-auto leading-relaxed">
          Discover our collection of 18K gold plated jewelry, designed for the modern woman who appreciates quiet luxury.
        </p>
        <Link to="/shop" className="btn-gold inline-block">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-10 bg-white/40" />
      </div>
    </section>
  );
}
