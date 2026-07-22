import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=85"
          alt="Gold jewelry close-up"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F]/80 via-[#0F0F0F]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-lg">
            <p className="text-xs tracking-[0.15em] uppercase text-[#C9A96E] mb-4 font-sans">
              New Collection
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F5F0EB] font-serif leading-[1.05]">
              Crafted to be<br />Treasured
            </h1>
            <p className="mt-6 text-base md:text-lg text-[#A0988E] max-w-md leading-relaxed">
              Demi-fine gold jewelry, handcrafted for the woman who values quality, 
              elegance, and everyday sophistication.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 mt-8 bg-[#C9A96E] text-[#0F0F0F] py-3.5 px-8 text-xs tracking-[0.15em] uppercase font-medium hover:bg-[#D4B87A] transition-all duration-300"
            >
              Shop the Collection
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#C9A96E] to-transparent mx-auto" />
      </div>
    </section>
  );
}