import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function AboutPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <main ref={containerRef} className="pt-20 md:pt-24">
      {/* Hero */}
      <div className="relative h-[50vh] md:h-[60vh] flex items-center justify-center">
        <div
          data-strk-bg-id="about-hero-bg-g7h8i9"
          data-strk-bg="[about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/30" />
        <h1 id="about-hero-title" className="relative z-10 font-serif text-4xl md:text-6xl text-white tracking-wide text-center px-4">
          Our Story
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="w-12 h-px bg-velmora-gold mx-auto mb-12" />
        <p className="font-serif text-xl md:text-2xl text-velmora-text leading-relaxed text-center italic">
          "We believe that beautiful jewelry shouldn't come with a luxury price tag."
        </p>
        <div className="mt-12 space-y-6 text-velmora-muted leading-relaxed">
          <p>
            Velmora was founded with a simple mission: to create demi-fine jewelry that looks, feels, and lasts like
            the real thing — without the four-figure price tag. Our pieces are crafted with 18K gold plating over
            quality brass, designed for everyday wear and special moments alike.
          </p>
          <p>
            Every piece in our collection is designed in-house, tested for hypoallergenic wear, and finished with
            meticulous attention to detail. We believe that the jewelry you wear should tell your story — and we're
            honored to be a part of it.
          </p>
          <p>
            From our studio to your jewelry box, each Velmora piece is made with love, care, and an unwavering
            commitment to quality. Because you deserve to feel extraordinary, every single day.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-velmora-border">
          {[
            { title: 'Quality First', desc: '18K gold plating over premium brass, built to last.' },
            { title: 'Hypoallergenic', desc: 'Nickel-free and safe for sensitive skin.' },
            { title: 'Sustainable', desc: 'Ethically sourced materials and eco-conscious packaging.' },
          ].map((value, i) => (
            <div key={i} className="text-center">
              <h3 className="font-serif text-xl text-velmora-text mb-2">{value.title}</h3>
              <p className="text-sm text-velmora-muted">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
