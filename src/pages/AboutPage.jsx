import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const AboutPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="[about-hero-title] jewelry craftsmanship"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h1 id="about-hero-title" className="serif-heading text-4xl md:text-5xl lg:text-6xl text-white tracking-wide font-light">
            Our Story
          </h1>
          <p className="mt-6 text-white/80 text-lg font-light">
            Where elegance meets accessibility
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="text-muted-foreground leading-relaxed text-base">
              Velmora was founded with a singular vision: to make fine jewelry accessible without compromising on quality or design. 
              We believe that every woman deserves to feel adorned, whether she's dressing for a boardroom presentation or a weekend brunch.
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed text-base">
              Our demi-fine collection is crafted in 18K gold plating over brass — a choice that gives you the warmth and luster of 
              solid gold at a fraction of the cost. Every piece is hypoallergenic and nickel-free, designed for sensitive skin and 
              everyday wear.
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed text-base">
              We work with skilled artisans who share our commitment to quality and sustainability. Each piece passes through 
              multiple quality checks before reaching you, because we believe jewelry should be as reliable as it is beautiful.
            </p>
          </div>

          {/* Values */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              { title: 'Quality First', desc: '18K gold plating, hypoallergenic materials, rigorous quality checks.' },
              { title: 'Accessible Luxury', desc: 'Premium design at demi-fine prices. No markup, no middlemen.' },
              { title: 'Thoughtful Design', desc: 'Every piece designed for versatility — day to night, casual to formal.' },
            ].map((value, i) => (
              <div key={i} className="text-center">
                <h3 className="serif-heading text-xl tracking-wider mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
