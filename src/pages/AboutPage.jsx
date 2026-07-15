import React, { useEffect, useRef } from 'react';
import strkImgConfig from '@/strk-img-config.json';
import { ImageHelper } from '@strikingly/sdk';

const AboutPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <main ref={containerRef} className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="relative py-24 lg:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="[about-title] jewelry artisan workshop"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h1 id="about-title" className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-light mb-6">
            Our Story
          </h1>
          <p className="font-sans text-base sm:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
            Born from a belief that beautiful jewelry should be accessible to everyone.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg max-w-none">
            <p className="font-sans text-base text-muted-foreground leading-relaxed mb-6">
              Velmora was founded in 2024 with a simple mission: to create demi-fine jewelry that looks and feels luxurious, without the luxury price tag. We believe that the pieces you wear every day should be beautiful, well-made, and kind to both your skin and the planet.
            </p>
            <p className="font-sans text-base text-muted-foreground leading-relaxed mb-6">
              Each piece in our collection is crafted from 18K gold plated recycled brass, ensuring both quality and sustainability. Our designs are inspired by the quiet elegance of everyday moments — the way light catches a curve, the feeling of a perfectly weighted earring, the confidence that comes from wearing something that feels like you.
            </p>
            <p className="font-sans text-base text-muted-foreground leading-relaxed mb-6">
              We work with skilled artisans who share our commitment to quality and ethical production. Every piece is hand-finished and quality-checked before it reaches you, because we believe that jewelry is personal — and it should be perfect.
            </p>

            <div className="my-12 py-12 border-y border-border text-center">
              <p className="font-serif text-2xl sm:text-3xl text-foreground italic leading-relaxed">
                "Jewelry is the punctuation of your story. Make it count."
              </p>
            </div>

            <p className="font-sans text-base text-muted-foreground leading-relaxed mb-6">
              Our packaging is designed to feel like opening a gift — because whether you're treating yourself or someone you love, the experience should be special. Each order arrives in our signature box, ready to be treasured.
            </p>
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              Thank you for choosing Velmora. We're honored to be part of your story.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-12 text-center">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                desc: '18K gold plating over recycled brass. Hypoallergenic, nickel-free, and built to last.',
              },
              {
                title: 'Sustainable',
                desc: 'Recycled materials, minimal packaging, and carbon-neutral shipping on every order.',
              },
              {
                title: 'Accessible Luxury',
                desc: 'Premium design at fair prices. Because everyone deserves to feel beautiful.',
              },
            ].map((value, i) => (
              <div key={i} className="text-center">
                <h3 className="font-serif text-xl text-foreground mb-3">{value.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
