import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function AboutPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-20 sm:pt-24 pb-16">
      {/* Hero */}
      <div className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-c8d2f4"
          data-strk-bg="gold jewelry artisan hands crafting warm light editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white tracking-wide">
            Our Story
          </h1>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-4" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="prose prose-lg max-w-none">
          <h2 className="font-serif text-3xl text-velmora-charcoal tracking-wide mb-6">
            Where Artistry Meets Accessibility
          </h2>
          <div className="w-12 h-px bg-velmora-gold mb-8" />

          <p className="text-velmora-taupe leading-relaxed mb-6 text-base">
            Velmora was founded with a simple yet powerful vision: to create jewelry that feels 
            luxurious without the luxury price tag. We believe that every woman deserves to adorn 
            herself with pieces that spark confidence and joy — whether she's buying for herself 
            or receiving a gift from someone who cares.
          </p>

          <p className="text-velmora-taupe leading-relaxed mb-6 text-base">
            Our demi-fine pieces are crafted using 18K gold plating over premium base metals, 
            finished by hand with genuine crystals and meticulous attention to detail. Each design 
            goes through multiple rounds of refinement to ensure it meets our standards for both 
            beauty and durability.
          </p>

          <p className="text-velmora-taupe leading-relaxed mb-6 text-base">
            We work directly with skilled artisans who share our commitment to quality. By selling 
            directly to you — without traditional retail markups — we're able to offer premium 
            jewelry at prices that make sense. This is what we mean by quiet luxury: pieces that 
            speak for themselves, crafted to be treasured for years to come.
          </p>

          <h3 className="font-serif text-2xl text-velmora-charcoal tracking-wide mt-12 mb-4">
            Our Promise
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {[
              { title: 'Quality Materials', desc: '18K gold plating, genuine crystals, hypoallergenic base metals.' },
              { title: 'Handcrafted Care', desc: 'Each piece is individually inspected and finished by skilled artisans.' },
              { title: 'Accessible Luxury', desc: 'Premium quality without traditional retail markups.' },
              { title: 'Sustainable Practices', desc: 'Minimal packaging, recycled materials, carbon-offset shipping.' },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-velmora-gold pl-4">
                <h4 className="font-serif text-lg text-velmora-charcoal mb-1">{item.title}</h4>
                <p className="text-sm text-velmora-taupe leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
