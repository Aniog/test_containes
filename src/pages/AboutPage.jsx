import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const values = [
  {
    title: 'Intentional Design',
    text: 'Every piece begins as a hand-drawn sketch. We obsess over proportions, weight, and how light interacts with each curve.',
  },
  {
    title: 'Accessible Luxury',
    text: 'We believe exceptional jewelry shouldn\'t require an exceptional budget. Our demi-fine pieces deliver fine-jewelry quality at honest prices.',
  },
  {
    title: 'Lasting Quality',
    text: '18K gold plating over surgical-grade stainless steel. Hypoallergenic, tarnish-resistant, and designed to be worn — not stored.',
  },
];

export default function AboutPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <main ref={containerRef} className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div
          data-strk-bg-id="about-hero-bg-p3q4r5"
          data-strk-bg="[about-hero-heading] [about-hero-text] artisan jewelry workshop gold"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 to-charcoal/30" />
        <div className="relative h-full max-w-7xl mx-auto container-px flex flex-col items-center justify-center text-center">
          <p id="about-hero-text" className="text-overline text-gold-pale mb-4">Our Story</p>
          <h1 id="about-hero-heading" className="font-serif text-display-sm md:text-display text-white">
            Crafted with Purpose
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-cream">
        <div className="max-w-3xl mx-auto container-px text-center">
          <h2 className="font-serif text-display-sm text-charcoal mb-6">
            Jewelry That Feels Like You
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mb-6" />
          <p className="font-sans text-body-lg text-warm-gray leading-relaxed mb-4">
            Velmora was founded on a simple observation: the most meaningful jewelry in a woman's collection
            isn't the most expensive — it's the piece she reaches for every morning without thinking.
            The one that feels like part of her.
          </p>
          <p className="font-sans text-body-lg text-warm-gray leading-relaxed">
            We set out to create exactly that kind of jewelry. Pieces with the quality and design
            integrity of fine jewelry, made accessible through thoughtful material choices and
            direct-to-consumer pricing.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-5xl mx-auto container-px">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {values.map((value, i) => (
              <div key={value.title} className="text-center">
                <div className="w-12 h-12 mx-auto mb-5 rounded-full border border-gold/30 flex items-center justify-center">
                  <span className="font-serif text-xl text-gold">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-serif text-heading-sm text-charcoal mb-3">{value.title}</h3>
                <p className="font-sans text-body text-warm-gray leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials section */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto container-px">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:order-2">
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img
                  data-strk-img-id="about-materials-img-s6t7u8"
                  data-strk-img="[about-materials-heading] [about-materials-text] gold jewelry materials craftsmanship"
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Velmora jewelry materials and craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-overline mb-4">Our Materials</p>
              <h2 id="about-materials-heading" className="font-serif text-display-sm text-charcoal mb-5">
                Quality Without Compromise
              </h2>
              <div className="w-12 h-[1px] bg-gold mb-6" />
              <p id="about-materials-text" className="font-sans text-body-lg text-warm-gray leading-relaxed mb-4">
                Every Velmora piece starts with a base of surgical-grade stainless steel — the same
                material used in medical implants. This foundation ensures our jewelry is genuinely
                hypoallergenic and built to endure daily wear.
              </p>
              <p className="font-sans text-body-lg text-warm-gray leading-relaxed mb-4">
                We then apply a generous layer of 18K gold plating using an advanced electroplating
                process. The result is a finish that's richer, more durable, and more luminous than
                standard gold-plated jewelry.
              </p>
              <p className="font-sans text-body-lg text-warm-gray leading-relaxed">
                Every crystal is hand-set. Every clasp is tested. Every piece passes through multiple
                quality checkpoints before it reaches you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
