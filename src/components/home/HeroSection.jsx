import { Link } from 'react-router-dom';
import { StockBackground } from '@/components/ui/StockImage';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <StockBackground
          bgId="hero-bg-a1b2c3"
          query="[hero-headline] [hero-subheadline]"
          ratio="16x9"
          width="1600"
          className="bg-[#2a2520]"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1
          id="hero-headline"
          className="serif-heading text-4xl md:text-6xl lg:text-7xl leading-tight mb-6"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subheadline"
          className="text-sm md:text-base font-light tracking-wide mb-10 text-white/80 max-w-lg mx-auto"
        >
          Demi-fine gold jewelry designed for the everyday moments that become lifelong memories.
        </p>
        <Link to="/shop" className="inline-block bg-[#c9a96e] text-[#1a1714] px-10 py-4 text-xs uppercase tracking-widest font-medium hover:bg-[#b89555] transition-all duration-300 hover:shadow-lg">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
