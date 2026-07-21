import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://placehold.co/1920x1080/1a1512/d4a853?text=VELMORA+FINE+JEWELRY"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-velvet-950 via-velvet-950/60 to-velvet-950/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-warm-50 tracking-wide leading-tight max-w-3xl text-balance">
          Crafted to be Treasured
        </h1>
        <p className="mt-6 text-base md:text-lg text-warm-300 max-w-xl leading-relaxed">
          Demi-fine gold jewelry designed for the modern woman — elevated
          everyday pieces that move with you.
        </p>
        <Link
          to="/shop"
          className="mt-10 btn-primary"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 rounded-full border border-warm-400/40 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-warm-400/60 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
