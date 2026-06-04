import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-950">
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-30"
        data-strk-bg-id="hero-bg-am-7f3c91"
        data-strk-bg="[hero-subtitle-am] [hero-title-am]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-gray-950/40 to-gray-950" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <span className="inline-block bg-blue-600/20 text-blue-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest border border-blue-500/30">
          Introducing
        </span>
        <h1
          id="hero-title-am"
          className="text-6xl md:text-8xl font-bold text-white tracking-tight leading-none mb-6"
        >
          APPLE <span className="text-blue-400">mini</span>
        </h1>
        <p
          id="hero-subtitle-am"
          className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Mighty performance. Impossibly small. The most powerful mini PC ever built.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#buy"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-full transition-colors text-lg"
          >
            Order Now
          </a>
          <a
            href="#features"
            className="border border-white/30 hover:border-white/60 text-white font-semibold px-10 py-4 rounded-full transition-colors text-lg backdrop-blur-sm"
          >
            Learn More
          </a>
        </div>
        <p className="mt-8 text-gray-500 text-sm">Starting at <span className="text-white font-semibold">$599</span></p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
