import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6">
              <Star className="w-4 h-4 fill-blue-700" />
              <span>Rated #1 Creative Agency in 2026</span>
            </div>
            <h1 id="hero-title" className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              Design the future <span className="text-blue-600">of your brand</span>
            </h1>
            <p id="hero-subtitle" className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              We help ambitious companies grow by creating world-class digital experiences that connect with human emotions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-blue-200">
                Start a Project <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center gap-2 bg-white text-slate-900 border-2 border-slate-100 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
                View Portfolio
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
                    <img 
                      data-strk-img-id={`avatar-${i}`} 
                      data-strk-img={`user-avatar-${i}`} 
                      data-strk-img-ratio="1x1" 
                      data-strk-img-width="100" 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" 
                      alt="Reviewer" 
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm font-medium text-slate-600">
                <span className="text-slate-900 font-bold">500+</span> companies already trust us
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                data-strk-img-id="hero-main-image"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Creative Workspace"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-slate-100 rounded-full blur-3xl opacity-50 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
