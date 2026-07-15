import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="section-title mb-6">Our Story</h1>
          <p className="text-brand-textMuted leading-relaxed text-lg">
            Velmora was born from a simple belief: fine jewelry should feel attainable, personal, and timeless. We design each piece in our London atelier, using 18K gold-plated brass and ethically sourced crystals to create demi-fine jewelry that transitions seamlessly from day to evening.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-16">
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <img
              data-strk-img-id="about-img-1"
              data-strk-img="[velmora atelier] [london jewelry design]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora atelier"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="section-title mb-6">Designed in London</h2>
            <p className="text-brand-textMuted leading-relaxed mb-4">
              Every Velmora piece begins as a sketch in our London studio, where our designers draw inspiration from architecture, nature, and the quiet elegance of everyday moments.
            </p>
            <p className="text-brand-textMuted leading-relaxed">
              We work with skilled artisans who share our commitment to quality and sustainability, ensuring each piece meets our exacting standards before it reaches you.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Ethical Materials', text: 'We use 18K gold-plated brass and ethically sourced crystals in every piece.' },
            { title: 'Timeless Design', text: 'Our jewelry is designed to transcend trends and be worn for years to come.' },
            { title: 'Accessible Luxury', text: 'We believe beautiful jewelry should be within reach for every woman.' },
          ].map((item, idx) => (
            <div key={idx} className="text-center p-8 bg-brand-surfaceAlt rounded-sm">
              <h3 className="font-serif text-xl mb-3">{item.title}</h3>
              <p className="text-sm text-brand-textMuted leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
