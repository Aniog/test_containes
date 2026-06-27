import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515562141589-67f0d569b6c2?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-wide leading-tight mb-6">
          Crafted to be Treasured
        </h1>
        <p className="text-base md:text-lg text-white/90 font-light tracking-wide max-w-xl mx-auto mb-10 leading-relaxed">
          Quiet luxury for the modern woman. Demi-fine jewelry designed to elevate your everyday.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#B8860B] text-white text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#9A7209] transition-all duration-300 group"
        >
          Shop the Collection
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
