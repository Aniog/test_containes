import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToProducts = () => {
    document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-[#0D1B2A]">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-am7x2k"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A] via-[#0D1B2A]/90 to-[#0D1B2A]/60" />

      {/* Decorative vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C8922A] to-transparent opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 pt-40 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-[#C8922A]" />
            <span className="text-[#C8922A] text-xs font-heading font-semibold uppercase tracking-[0.25em]">
              Precision Engineering
            </span>
          </div>

          <h1
            id="hero-title"
            className="font-heading font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight"
          >
            Master the Art of
            <span className="block text-[#3A9BD5]">Sheet Metal Folding</span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-gray-300 text-lg leading-relaxed max-w-lg"
          >
            ARTITECT MACHINERY delivers industrial-grade double folding machines and metal folder solutions engineered for precision, durability, and efficiency — built for professionals who demand perfection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <button
              onClick={scrollToProducts}
              className="flex items-center justify-center gap-2 bg-[#1E6FA5] hover:bg-[#3A9BD5] text-white px-8 py-4 rounded font-heading font-semibold text-sm tracking-wide transition-all duration-200 group"
            >
              Explore Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="flex items-center justify-center gap-2 border border-[#C8922A] text-[#C8922A] hover:bg-[#C8922A] hover:text-white px-8 py-4 rounded font-heading font-semibold text-sm tracking-wide transition-all duration-200"
            >
              Request a Quote
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-6 pt-6 border-t border-white/10">
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '500+', label: 'Machines Delivered' },
              { value: '40+', label: 'Countries Served' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-[#C8922A] font-heading font-bold text-2xl">{stat.value}</span>
                <span className="text-gray-400 text-xs tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Hero image */}
        <div className="hidden md:flex justify-center items-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-4 bg-[#1E6FA5]/10 rounded-2xl blur-xl" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
              <img
                alt="Sheet metal folding machine"
                data-strk-img-id="hero-machine-img-9f3b1c"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
              {/* Badge */}
              <div className="absolute bottom-4 left-4 bg-[#0D1B2A]/90 backdrop-blur-sm border border-[#C8922A]/40 rounded-lg px-4 py-2">
                <span className="text-[#C8922A] font-heading font-semibold text-xs tracking-widest uppercase">
                  Industrial Grade
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/80 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-7 h-7" />
      </button>
    </section>
  );
}
