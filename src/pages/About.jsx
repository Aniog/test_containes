import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Our Story</h1>
          <p className="font-sans text-sm text-warm-gray max-w-xl mx-auto">
            Velmora was born from a simple belief: every woman deserves jewelry that feels as special as she is.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
          <div className="aspect-[4/5] bg-gold-light overflow-hidden">
            <img
              alt="Velmora craftsmanship"
              data-strk-img-id="about-hero-q1r2s3"
              data-strk-img="[about-heading-1] [about-text-1]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 id="about-heading-1" className="font-serif text-3xl text-charcoal mb-6">
              Quiet Luxury, Thoughtfully Made
            </h2>
            <p id="about-text-1" className="font-sans text-sm text-warm-gray leading-relaxed mb-4">
              Founded in 2022, Velmora bridges the gap between costume jewelry and fine jewelry. We believe in accessible luxury — pieces that look and feel expensive without the prohibitive price tag.
            </p>
            <p className="font-sans text-sm text-warm-gray leading-relaxed mb-4">
              Every piece is crafted with 18K gold plating over hypoallergenic brass or sterling silver, ensuring both beauty and comfort for sensitive skin.
            </p>
            <p className="font-sans text-sm text-warm-gray leading-relaxed">
              Our designs are inspired by architectural details, natural forms, and the quiet confidence of the modern woman. We don't follow trends — we create timeless pieces meant to be worn for years.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-t border-hairline">
          {[
            { title: 'Sustainable Materials', desc: 'We use recycled metals and ethically sourced stones wherever possible.' },
            { title: 'Artisan Crafted', desc: 'Each piece is hand-finished by skilled artisans in small batches.' },
            { title: 'Designed to Last', desc: 'Our 18K gold plating is 5x thicker than industry standard for lasting wear.' },
          ].map((value, i) => (
            <div key={i} className="text-center">
              <h3 className="font-serif text-xl text-charcoal mb-3">{value.title}</h3>
              <p className="font-sans text-sm text-warm-gray leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
