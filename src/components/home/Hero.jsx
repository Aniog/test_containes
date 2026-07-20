import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.ImageHelper && containerRef.current) {
      import('@/strk-img-config.json').then(config => {
        window.ImageHelper.loadImages(config.default || config, containerRef.current);
      }).catch(() => {});
    }
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      
      {/* Video/Image Background */}
      <div className="absolute inset-0 w-full h-full object-cover">
        <img 
          src="https://images.unsplash.com/photo-1542152862837-775c61266e77?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=100" 
          alt="Model wearing fine gold jewelry" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center mt-16">
        <h1 
          className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 font-medium leading-tight"
          id="hero-title"
        >
          Crafted to be Treasured
        </h1>
        <p 
          className="text-lg md:text-xl font-light mb-10 max-w-2xl text-white/90"
          id="hero-subtitle"
        >
          Demi-fine gold jewelry for the modern romantic. Elevate your everyday with pieces designed to tell your story.
        </p>
        <Link 
          to="/shop" 
          className="bg-primary text-foreground px-10 py-4 text-sm font-medium tracking-widest uppercase hover:bg-primary-dark transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Trust Bar directly integrated into hero bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-background/95 backdrop-blur-md border-t border-borders py-4 hidden md:block">
        <div className="container mx-auto px-6 flex justify-between items-center text-xs tracking-wider uppercase font-medium text-foreground/80">
          <span>Free Worldwide Shipping</span>
          <span className="w-1 h-1 rounded-full bg-primary mx-4"></span>
          <span>30-Day Returns</span>
          <span className="w-1 h-1 rounded-full bg-primary mx-4"></span>
          <span>18K Gold Plated</span>
          <span className="w-1 h-1 rounded-full bg-primary mx-4"></span>
          <span>Hypoallergenic</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
