import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#C5A882] via-[#A89070] to-[#8B7355]" />
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg"
        data-strk-bg="gold jewelry luxury editorial model woman elegant warm lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-5">
        <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-white/80 mb-5">
          Velmora Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-tight max-w-3xl">
          Crafted to be Treasured
        </h1>
        <p className="mt-5 text-sm md:text-base text-white/70 max-w-md leading-relaxed font-light">
          Demi-fine gold jewelry, designed for the everyday and the extraordinary.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-block bg-velmora-gold text-white px-8 py-3.5 text-xs tracking-widest uppercase font-medium hover:bg-white hover:text-velmora-charcoal transition-all duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <ChevronDown size={20} strokeWidth={1.5} />
      </div>
    </section>
  );
}
