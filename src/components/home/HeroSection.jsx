import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-dark-800"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-subtitle] [hero-title] luxury gold jewelry warm light closeup"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-dark-900/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl animate-fade-in">
        <p className="font-sans text-xs uppercase tracking-widest-2xl text-cream-300 mb-4">
          Fine Jewelry Collection
        </p>
        <h1
          id="hero-title"
          className="heading-xl text-cream-50 mb-6"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="font-sans text-base md:text-lg text-cream-200 mb-8 max-w-lg mx-auto leading-relaxed"
        >
          Demi-fine 18K gold jewelry designed for the modern woman. Every piece tells a story of quiet luxury.
        </p>
        <Link to="/shop" className="btn-primary">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-8 bg-cream-300/50" />
      </div>
    </section>
  );
}
