import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-40 z-0 bg-cover bg-center"
        data-strk-bg-id="hero-machinery-bg-1a2b"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl">
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Precision in Every Fold
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
            Artitect Machinery provides industry-leading double folding machines and sheet metal folders. Elegant, user-friendly, and engineered for maximum productivity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg px-8">
              Explore Products
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-slate-400 text-slate-900 bg-white hover:bg-slate-100 font-medium text-lg px-8">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
