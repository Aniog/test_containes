import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="relative py-20 lg:py-32 overflow-hidden bg-slate-900">
      <div 
        className="absolute inset-0 opacity-40"
        data-strk-bg-id="hero-bg-sourcing-001"
        data-strk-bg="[hero-title] [hero-subtitle] bulk shipping port warehouse"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      
      <div className="container relative mx-auto px-4 text-center text-white">
        <h1 id="hero-title" className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          China Sourcing Agent for Global Buyers
        </h1>
        <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
          Simplify your supply chain. We help you find reliable suppliers, verify factories, inspect quality, and coordinate shipping from China.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold" asChild>
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white/10 font-bold" asChild>
            <Link to="/services">Explore Our Services</Link>
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-80">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-amber-500">10+</span>
            <span className="text-sm text-slate-400">Years Experience</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-amber-500">500+</span>
            <span className="text-sm text-slate-400">Verified Suppliers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-amber-500">1000+</span>
            <span className="text-sm text-slate-400">Containers Shipped</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-amber-500">98%</span>
            <span className="text-sm text-slate-400">Satisfied Clients</span>
          </div>
        </div>
      </div>
    </section>
  );
}
