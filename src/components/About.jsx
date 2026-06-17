import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="section bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="uppercase tracking-[3px] text-xs text-brand-gold font-semibold mb-3">OUR STORY</div>
            <h2 className="font-serif text-5xl md:text-6xl tracking-[-1.5px] leading-none text-brand-dark mb-8">
              Built by makers.<br />For makers.
            </h2>
            <div className="space-y-6 text-lg text-brand-slate leading-relaxed">
              <p>
                ARTITECT MACHINERY was founded in a small workshop by engineers who believed that every bend should be perfect — not just the first one, but the thousandth.
              </p>
              <p>
                Today, our double folders and sheet metal folding machines are trusted by fabricators, aerospace suppliers, and architectural metalworkers across four continents.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-8 text-sm">
              <div>
                <div className="font-serif text-4xl text-brand-dark tracking-tight">16</div>
                <div className="text-brand-slate mt-1">Years of precision</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-brand-dark tracking-tight">1,200+</div>
                <div className="text-brand-slate mt-1">Machines delivered</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-brand-dark tracking-tight">38</div>
                <div className="text-brand-slate mt-1">Countries served</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
              <img
                data-strk-img-id="about-workshop"
                data-strk-img="[about-subtitle] [about-title] precision metal workshop craftsmen"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="ARTITECT craftsmen assembling a precision double folding machine in a bright, organized workshop"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-8 shadow-xl rounded-xl max-w-[280px] border border-slate-100">
              <div className="text-brand-gold text-sm tracking-widest mb-2">OUR PROMISE</div>
              <p className="text-brand-dark leading-snug">
                Every machine we ship is tested to 0.1° accuracy. If it doesn't meet our standard, it never leaves our floor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;