import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&h=900&fit=crop&q=80"
          alt="Gold jewelry editorial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/60 via-[#1A1A1A]/40 to-[#1A1A1A]/70" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#D4BA8A] mb-4 md:mb-6">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-[4rem] text-[#FAF8F5] font-light leading-tight mb-6">
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-sm md:text-base text-[#FAF8F5]/80 max-w-lg mx-auto mb-8 leading-relaxed">
          Premium 18K gold-plated jewelry designed for the modern woman. Accessible luxury that lasts.
        </p>
        <Link to="/shop" className="inline-flex items-center justify-center bg-[#C5A572] text-[#FAF8F5] font-sans text-sm font-medium tracking-[0.2em] uppercase px-8 py-3.5 transition-all duration-300 hover:bg-[#A88B5A]">
          Shop the Collection
        </Link>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[#FAF8F5]/50 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-8 bg-[#FAF8F5]/30" />
      </div>
    </section>
  );
}
