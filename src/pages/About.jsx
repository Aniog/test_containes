import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen pt-20 md:pt-24 pb-16">
      {/* Hero banner */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div
          data-strk-bg-id="about-hero-bg-9a1b2c"
          data-strk-bg="[about-desc] [about-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        >
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h1 id="about-title" className="font-serif text-4xl md:text-6xl text-white tracking-wide">
              Our Story
            </h1>
            <span className="hidden" id="about-desc">jewelry atelier craftsmanship Barcelona studio</span>
          </div>
        </div>
      </div>

      <div className="section-padding max-w-3xl mx-auto py-16 md:py-24">
        <div className="space-y-8 text-velmora-slate leading-relaxed">
          <p className="font-serif text-2xl text-velmora-charcoal tracking-wide">
            Velmora was born from a single, quiet conviction: that the jewelry you wear every day should feel extraordinary.
          </p>
          <p>
            Founded in Barcelona in 2020, we set out to bridge the gap between disposable fashion jewelry 
            and unattainable fine jewelry. Our answer: demi-fine pieces crafted with the same techniques 
            and attention to detail as high jewelry, but sold directly to you at a fair, transparent price.
          </p>
          <p>
            Every Velmora piece is designed in-house by our small team of women designers, then brought 
            to life by artisan partners who have been working with precious metals for generations. 
            We use only 18K gold plating over recycled brass, with hypoallergenic posts and findings — 
            because beauty should never come at the cost of comfort.
          </p>
          <p>
            We are independently owned, self-funded, and built on the belief that luxury is quiet confidence — 
            not a logo. Thank you for being part of our story.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            { title: 'Ethically Made', desc: 'All our gold is sourced from certified ethical suppliers. Every piece is crafted in small batches to minimize waste.' },
            { title: 'Designed to Last', desc: 'Our 18K gold plating is triple-layered for durability. With proper care, your Velmora pieces will shine for years.' },
            { title: 'Direct to You', desc: 'By selling directly, we eliminate the traditional 6–8x retail markup. You get fine jewelry quality at a fair price.' },
          ].map(v => (
            <div key={v.title} className="text-center">
              <h3 className="font-serif text-lg tracking-wide text-velmora-charcoal">{v.title}</h3>
              <p className="mt-3 text-sm text-velmora-warmgray">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
