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
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-g7h8i9"
          data-strk-bg="[about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 id="about-hero-title" className="serif-heading text-4xl md:text-6xl font-light">
            Our Story
          </h1>
          <p className="mt-4 text-white/80 tracking-widest uppercase text-sm">
            The heart behind Velmora
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-padding max-w-3xl">
          <div className="serif-heading text-2xl md:text-3xl font-light leading-relaxed mb-8 text-balance">
            We believe that beautiful jewelry should be accessible to everyone, without compromising on quality or design.
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Velmora was founded with a simple mission: to create demi-fine jewelry that feels luxurious, 
              lasts beautifully, and doesn't require a luxury budget. Every piece in our collection is 
              thoughtfully designed and crafted using 18K gold plating over sterling silver.
            </p>
            <p>
              Our design philosophy centers on timeless elegance with a modern sensibility. We draw 
              inspiration from nature, architecture, and the quiet moments of everyday life — the way 
              light catches a curve, the geometry of a petal, the warmth of golden hour.
            </p>
            <p>
              We work with skilled artisans who share our commitment to quality and sustainability. 
              Each piece undergoes rigorous quality control to ensure it meets our standards for 
              beauty, durability, and comfort.
            </p>
          </div>

          {/* Values */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              { title: 'Quality', desc: '18K gold plating over sterling silver, built to last.' },
              { title: 'Accessibility', desc: 'Premium design at prices that make sense.' },
              { title: 'Sustainability', desc: 'Responsible sourcing and eco-conscious packaging.' },
            ].map(value => (
              <div key={value.title} className="text-center">
                <h3 className="serif-heading text-xl mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
