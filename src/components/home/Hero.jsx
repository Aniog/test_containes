import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden bg-softblack">
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <p className="text-cream/70 text-xs tracking-widest uppercase font-sans mb-6">Demi-Fine Jewelry</p>
        <h1 id="hero-title" className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream font-light leading-tight mb-6">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="text-cream/70 text-base md:text-lg font-sans font-light mb-10 leading-relaxed">
          Gold jewelry designed for the modern woman — worn every day, cherished forever.
        </p>
        <Link to="/shop" className="btn-accent">
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
