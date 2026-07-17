import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.opacity = Math.max(0, 1 - scrolled / 700);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Velmora jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto fade-in-up">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 tracking-wide">
          Crafted to be<br />Treasured
        </h1>
        <p className="font-sans text-lg md:text-xl mb-12 tracking-wide opacity-90 max-w-2xl mx-auto leading-relaxed">
          Demi-fine jewelry for the modern romantic. Each piece thoughtfully designed to celebrate life's precious moments.
        </p>
        <a
          href="/shop"
          className="btn-primary inline-flex items-center gap-3 bg-white text-charcoal border-white hover:bg-transparent hover:text-white"
        >
          Shop the Collection
          <ArrowRight size={18} />
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-white/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
