import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, RotateCcw, Shield, Heart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&h=1000&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wide mb-6 leading-tight">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-sm md:text-base tracking-widest uppercase mb-10 text-white/90">
          Demi-fine jewelry for the modern woman
        </p>
        <Link to="/shop" className="btn-primary inline-block">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  const benefits = [
    { icon: Truck, text: 'Free Worldwide Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: Shield, text: '18K Gold Plated' },
    { icon: Heart, text: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-[var(--velmora-bg-alt)] py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-[var(--velmora-text-muted)]">
              <benefit.icon size={16} />
              <span className="tracking-wide">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { HeroSection, TrustBar };
