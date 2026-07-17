import { useEffect, useRef } from 'react';
// import { ImageHelper } from '@strikingly/sdk';
// import strkImgConfig from '@/strk-img-config.json';

export default function AboutPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return // ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-20">
      <div className="section-padding">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest uppercase text-taupe mb-4">About</p>
          <h1 className="font-serif text-3xl md:text-5xl text-espresso">Our Story</h1>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="aspect-[16/9] mb-12 overflow-hidden rounded-sm">
            <img
              data-strk-img-id="about-hero-img"
              data-strk-img="luxury jewelry workshop artisan crafting gold warm light"
              data-strk-img-ratio="16x9"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="font-serif text-2xl md:text-3xl text-espresso mb-6 leading-snug">
            Jewelry is personal. It marks our milestones, carries our memories, and tells the world who we are before we say a word.
          </div>

          <div className="space-y-5 font-sans text-sm text-taupe leading-relaxed">
            <p>
              Velmora was founded in 2021 in Paris by two women who grew tired of the gap between
              disposable fashion jewelry and inaccessible fine jewelry. They set out to create a
              third option: demi-fine gold jewelry that combines premium materials, timeless design,
              and prices that don't require a special occasion.
            </p>
            <p>
              Every Velmora piece is crafted with 18K gold plating over sterling silver or brass,
              using hypoallergenic materials and ethically sourced stones. We work with small family
              ateliers in Italy and France, ensuring every piece meets our standards for quality,
              durability, and beauty.
            </p>
            <p>
              We believe jewelry is meant to be worn — not reserved for anniversaries and birthdays.
              It's for Tuesday mornings. For coffee with a friend. For the quiet moments that make up
              a life. Velmora is here for all of it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
