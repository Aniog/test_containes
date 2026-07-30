import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-sprite-dark via-sprite-green to-sprite-lime"
    >
      {/* Decorative bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sprite-lime/10 blur-3xl" />
        {/* Small bubble dots */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: `${8 + (i % 4) * 6}px`,
              height: `${8 + (i % 4) * 6}px`,
              top: `${10 + (i * 7) % 80}%`,
              left: `${5 + (i * 11) % 90}%`,
              animation: `float ${3 + (i % 3)}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <p className="text-sprite-lime font-bold uppercase tracking-widest text-sm mb-4 font-poppins">
            The Original Lemon-Lime
          </p>
          <h1
            id="hero-title"
            className="text-7xl md:text-8xl font-black text-white leading-none uppercase font-poppins mb-6"
          >
            Obey<br />
            <span className="text-sprite-lime">Your</span><br />
            Thirst.
          </h1>
          <p
            id="hero-subtitle"
            className="text-white/80 text-xl font-medium mb-10 max-w-md font-poppins leading-relaxed"
          >
            Crisp. Clean. Refreshing. Sprite delivers the ultimate lemon-lime
            taste that cuts through the heat and quenches like nothing else.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#flavors"
              className="bg-white text-sprite-green rounded-full px-8 py-4 font-black text-sm uppercase tracking-wide hover:bg-sprite-light transition-colors font-poppins shadow-lg"
            >
              Explore Flavors
            </a>
            <a
              href="#story"
              className="border-2 border-white text-white rounded-full px-8 py-4 font-black text-sm uppercase tracking-wide hover:bg-white hover:text-sprite-green transition-colors font-poppins"
            >
              Our Story
            </a>
          </div>
        </div>

        {/* Can image */}
        <div className="flex justify-center items-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-white/10 blur-3xl scale-110" />
            <img
              data-strk-img-id="hero-can-img-a1b2c3"
              data-strk-img="[hero-subtitle] [hero-title] sprite lemon lime soda can"
              data-strk-img-ratio="3x4"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Sprite can"
              className="relative z-10 w-64 md:w-80 object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#flavors"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>

      <style>{`
        @keyframes float {
          from { transform: translateY(0px); }
          to { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}
