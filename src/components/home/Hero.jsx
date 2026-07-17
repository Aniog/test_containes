import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStrkImages } from '@/hooks/useStrkImages';

const Hero = () => {
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  useStrkImages(containerRef);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{ opacity: loaded ? 1 : 0 }}
        data-strk-bg-id="hero-bg-f7a2b3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1
          id="hero-title"
          className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-wide leading-tight max-w-3xl transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className={`mt-4 md:mt-6 text-base md:text-lg text-white/80 font-sans font-light max-w-lg leading-relaxed transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          Demi-fine gold jewelry designed for everyday elegance. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link
          to="/shop"
          className={`mt-8 md:mt-10 bg-brand-gold text-white font-sans text-xs font-semibold tracking-super-wide uppercase px-10 py-4 hover:bg-brand-gold-dark transition-all duration-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '0.7s' }}
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
