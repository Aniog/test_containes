import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const HomeHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-slate-900"
        data-strk-bg-id="hero-bg-ssourcing"
        data-strk-bg="[hero-description] [hero-title] China sourcing agent factory warehouse shipping"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-20 text-white">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground text-sm font-medium mb-6 animate-in fade-in slide-in-from-bottom-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Professional Sourcing Partners in China
          </div>
          
          <h1 id="hero-title" className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
            China Sourcing Agent for <span className="text-primary italic">Global Buyers</span>
          </h1>
          
          <p id="hero-description" className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl">
            Find reliable suppliers, verify factories, inspect quality, and coordinate shipping with SSourcing China. We are your eyes and ears on the ground, ensuring transparency and quality in every shipment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/contact">
              <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/25">
                Get a Free Sourcing Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-white/5 hover:bg-white/10 border-white/20 text-white backdrop-blur-sm">
                Explore Our Services
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-slate-100">Factory Audits</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-slate-100">Quality Inspections</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-slate-100">Global Logistics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
