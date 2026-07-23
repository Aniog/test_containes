import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          alt="Gold jewelry hero"
          data-strk-img-id="hero-bg-44e8f2"
          data-strk-img="[hero-subtitle] [hero-title]"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1920"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6 max-w-3xl mx-auto">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-5xl lg:text-7xl leading-[1.1] mb-6 tracking-wide"
        >
          Crafted to be<br />Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-sm md:text-base text-white/70 max-w-md mx-auto mb-10 leading-relaxed font-light"
        >
          Demi-fine gold jewelry designed for the moments that matter — from everyday elegance to forever keepsakes.
        </p>
        <Link to="/shop" className="btn-gold inline-block">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-1.5">
          <div className="w-0.5 h-2.5 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
