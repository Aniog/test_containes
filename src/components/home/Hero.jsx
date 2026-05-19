import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-stone-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-28 flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
            Man's Best Friend
          </span>
          <h1
            id="hero-heading"
            className="text-5xl md:text-7xl font-extrabold text-stone-900 leading-tight mb-6"
          >
            Life is Better<br />
            <span className="text-amber-500">With a Dog</span>
          </h1>
          <p
            id="hero-subheading"
            className="text-lg text-stone-600 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0"
          >
            Discover the joy, loyalty, and unconditional love that dogs bring into our lives.
            Explore breeds, care tips, and fascinating facts about our four-legged companions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#breeds"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full transition-colors no-underline text-center"
            >
              Explore Breeds
            </a>
            <a
              href="#facts"
              className="border-2 border-amber-500 text-amber-600 hover:bg-amber-50 font-semibold px-8 py-3 rounded-full transition-colors no-underline text-center"
            >
              Fun Facts
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="flex-1 w-full max-w-md md:max-w-none">
          <div className="relative">
            <div
              className="w-full rounded-3xl shadow-2xl overflow-hidden"
              style={{ aspectRatio: '4/3' }}
              data-strk-bg-id="hero-bg-8f2a9c"
              data-strk-bg="[hero-subheading] [hero-heading]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-5 py-3 flex items-center gap-3">
              <span className="text-3xl">🐶</span>
              <div>
                <p className="text-xs text-stone-400 uppercase tracking-wide font-medium">Registered Breeds</p>
                <p className="text-xl font-bold text-stone-900">340+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-white" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
    </section>
  );
};

export default Hero;
