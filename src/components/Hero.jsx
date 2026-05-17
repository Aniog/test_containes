import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative overflow-hidden bg-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Trusted Breeders Since 2010
          </span>
          <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-4">
            Find Your Perfect<br />
            <span className="text-amber-700">Furry Companion</span>
          </h1>
          <p id="hero-sub" className="text-stone-600 text-lg mb-8 max-w-md mx-auto md:mx-0">
            We raise happy, healthy, and well-socialized puppies with love and care. Browse our available dogs and find your new best friend.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="#dogs"
              className="bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-full px-7 py-3 text-base transition-colors text-center"
            >
              See Available Dogs
            </a>
            <a
              href="#contact"
              className="border-2 border-amber-700 text-amber-700 hover:bg-amber-50 font-semibold rounded-full px-7 py-3 text-base transition-colors text-center"
            >
              Contact Us
            </a>
          </div>
          <div className="mt-10 flex items-center gap-8 justify-center md:justify-start">
            <div className="text-center">
              <p className="text-2xl font-bold text-stone-900">200+</p>
              <p className="text-xs text-stone-500 uppercase tracking-wide">Happy Families</p>
            </div>
            <div className="w-px h-10 bg-stone-300" />
            <div className="text-center">
              <p className="text-2xl font-bold text-stone-900">10+</p>
              <p className="text-xs text-stone-500 uppercase tracking-wide">Breeds Available</p>
            </div>
            <div className="w-px h-10 bg-stone-300" />
            <div className="text-center">
              <p className="text-2xl font-bold text-stone-900">15yr</p>
              <p className="text-xs text-stone-500 uppercase tracking-wide">Experience</p>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="flex-1 w-full max-w-md md:max-w-none">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
            <img
              alt="Happy puppies"
              className="w-full h-full object-cover"
              data-strk-img-id="hero-dog-img-8f2a9c"
              data-strk-img="[hero-sub] [hero-heading]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40H1440V20C1200 0 960 40 720 20C480 0 240 40 0 20V40Z" fill="#f5f5f4" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
