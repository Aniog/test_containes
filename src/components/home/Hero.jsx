import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry warm"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-wide leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-5 text-base md:text-lg text-white/80 font-light tracking-wide max-w-xl mx-auto"
        >
          Demi-fine gold jewelry designed for the everyday and the unforgettable.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 bg-gold text-white text-xs tracking-super-wide uppercase font-medium px-10 py-3.5 hover:bg-gold-dark transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
