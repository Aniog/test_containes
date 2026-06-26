import { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToProducts = (e) => {
    e.preventDefault();
    document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-7a3b2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/80 via-[#0a0a0b]/70 to-[#0a0a0b]/95" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a44c]/10 border border-[#c9a44c]/20 rounded-full mb-8">
          <span className="w-2 h-2 bg-[#c9a44c] rounded-full animate-pulse" />
          <span className="text-[#c9a44c] text-xs font-medium uppercase tracking-[0.15em]">
            Industrial Precision Since 1987
          </span>
        </div>

        <h1
          id="hero-title"
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#f5f5f5] tracking-tight leading-[1.05] mb-6"
        >
          Engineering the Future
          <br />
          <span className="text-[#c9a44c]">of Metal Folding</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-[#a0a0a8] text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          ARTITECT MACHINERY designs and manufactures premium double folding machines,
          sheet metal folders, and metal folding solutions for workshops that demand
          uncompromising precision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#products"
            onClick={scrollToProducts}
            className="inline-flex items-center gap-2 bg-[#c9a44c] text-[#0a0a0b] font-semibold px-8 py-3.5 rounded-sm hover:bg-[#d4b55e] transition-colors text-sm uppercase tracking-[0.08em]"
          >
            Explore Products
            <ChevronRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 border border-[#c9a44c] text-[#c9a44c] font-semibold px-8 py-3.5 rounded-sm hover:bg-[#c9a44c] hover:text-[#0a0a0b] transition-colors text-sm uppercase tracking-[0.08em]"
          >
            Get a Quote
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0b] to-transparent" />
    </section>
  );
}
