import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <main ref={containerRef} className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="aspect-[4/5] bg-[#F5EDDA] overflow-hidden">
            <img
              data-strk-img-id="about-hero-img"
              data-strk-img="[about-hero-title] gold jewelry craftsmanship workshop"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              alt="Artisan crafting gold jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#C4952E] mb-4">
              About Velmora
            </p>
            <h1
              id="about-hero-title"
              className="font-serif text-[2.25rem] md:text-[3rem] leading-[1.15] tracking-[0.03em] mb-6"
            >
              Jewelry shouldn't wait for a special occasion.
            </h1>
            <div className="space-y-5 text-[15px] leading-relaxed text-[#55514C]">
              <p>
                Velmora was born from a simple, stubborn belief: that every woman
                deserves jewelry that makes her feel extraordinary — not just on
                anniversaries or birthdays, but on ordinary Tuesday mornings when
                the light hits just right.
              </p>
              <p>
                We cut out the middlemen. No wholesale markups. No retail overhead.
                Just direct partnerships with artisan workshops who share our obsession
                with craft — studios where gold-plating is still done by hand, where
                crystals are set one at a time, where quality is never compromised
                for speed.
              </p>
              <p>
                The result: 18K gold-plated pieces with the weight and warmth of fine
                jewelry, priced to be lived in — $30 to $120, delivered free to your door.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <h2 className="section-title">What We Stand For</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
            {[
              {
                title: 'Responsible Craft',
                text: 'Every piece is made in small batches by skilled artisans. We visit our workshops, know our craftspeople by name, and ensure fair wages and safe conditions.',
              },
              {
                title: 'Honest Pricing',
                text: 'Traditional jewelry retail marks up 8–10x. We sell direct — same materials, same craft, radically fair prices. Luxury should feel good in every sense.',
              },
              {
                title: 'Designed to Last',
                text: '18K gold plating over brass, hypoallergenic metals, and reinforced clasps. These are pieces meant to become part of your daily uniform for years.',
              },
            ].map((v) => (
              <div key={v.title} className="text-center">
                <h3 className="font-serif text-lg tracking-wider mb-4">
                  {v.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-[#55514C]">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24 text-center">
        <h2 className="font-serif text-[2rem] md:text-[2.5rem] tracking-[0.03em] mb-6">
          Ready to find your next treasure?
        </h2>
        <Link to="/shop" className="btn-primary text-xs tracking-widest">
          Explore the Collection
        </Link>
      </section>
    </main>
  );
}
