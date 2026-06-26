import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" className="py-24 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden">
              <img 
                data-strk-img-id="about-img-1"
                data-strk-img="architectural metal facade detail precision folded"
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Architectural Precision"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-[20px] border-white/10" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-gold p-8 hidden md:flex flex-col justify-center">
              <span className="text-white text-5xl font-serif font-bold italic leading-none">Art</span>
              <span className="text-brand-dark font-bold uppercase tracking-tighter text-xl mt-2 ml-4">itect</span>
            </div>
          </div>

          <div>
            <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-[10px] block mb-4">Precision Engineering</span>
            <h2 className="text-4xl md:text-5xl text-brand-dark mb-8 leading-tight">Where <span className="text-brand-gold italic">Artistry</span> meets industrial strength</h2>
            <p className="text-brand-gray/70 text-lg leading-relaxed mb-8">
              At Artitect Machinery, we believe that industrial equipment shouldn't just be functional—it should be a masterpiece of engineering. Our machines are designed to help you create complex, beautiful architectural elements with absolute precision.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-brand-dark uppercase tracking-widest text-sm mb-2">Double Folder Technology</h4>
                <p className="text-xs text-brand-gray/60 leading-relaxed">Our patented dual-wing system allows for complex reverse bends without flipping the sheet.</p>
              </div>
              <div>
                <h4 className="font-bold text-brand-dark uppercase tracking-widest text-sm mb-2">User-Centric Design</h4>
                <p className="text-xs text-brand-gray/60 leading-relaxed">Intuitive touch interfaces designed for operators to master within hours, not days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
