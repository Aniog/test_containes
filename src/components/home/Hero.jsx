import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-4">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#F5F5F0] tracking-wide animate-fadeIn">
          Crafted to be Treasured
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[#F5F5F0]/80 max-w-xl mx-auto animate-fadeIn stagger-1">
          Premium demi-fine jewelry designed for the modern woman. 
          Elegant pieces that become part of your story.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-10 px-10 py-4 bg-[#C9A962] text-[#0D0D0D] text-sm font-medium uppercase tracking-[0.15em] hover:bg-[#D4B978] transition-all duration-300 animate-fadeIn stagger-2"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-[#F5F5F0]/60" />
      </div>
    </section>
  );
}
