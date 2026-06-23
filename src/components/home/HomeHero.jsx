import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Microscope } from 'lucide-react';

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative flex items-center justify-center min-h-[80vh] overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-slate-900"
          data-strk-bg-id="hero-bg-micro-1"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-cyan-950/50 rounded-full border border-cyan-800/50 text-cyan-400">
            <Microscope className="w-12 h-12" />
          </div>
        </div>
        <h1 id="hero-title" className="text-5xl md:text-7xl font-bold tracking-tight text-white">
          The MicroCosmos
        </h1>
        <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto">
          Explore the hidden universe that exists right beneath our fingertips. Discover cells, bacteria, and microscopic wonders.
        </p>
      </div>
    </section>
  );
}
