import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const AboutPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section ref={containerRef} className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          data-strk-bg-id="about-hero-bg-m1n2o3"
          data-strk-bg="[about-hero-subtitle] [about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-velmora-dark/40" />
        <div className="relative z-10 text-center px-4">
          <h1 id="about-hero-title" className="font-serif text-4xl md:text-6xl text-velmora-dark-text mb-4">
            Our Story
          </h1>
          <p id="about-hero-subtitle" className="text-velmora-dark-text/80 text-lg max-w-xl mx-auto">
            Where timeless craftsmanship meets modern elegance.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="text-velmora-secondary text-lg leading-relaxed mb-6">
              Velmora was founded with a singular vision: to make luxury jewelry accessible without compromising on quality or design. 
              We believe that every woman deserves to feel extraordinary, not just on special occasions, but every single day.
            </p>
            <p className="text-velmora-secondary text-lg leading-relaxed mb-6">
              Our name draws from the Latin word "velum," meaning veil — a nod to the delicate, almost ethereal quality 
              we strive for in every piece. Each design is a balance of strength and subtlety, meant to complement 
              rather than overpower the woman who wears it.
            </p>
            <h2 className="font-serif text-3xl text-velmora-text mt-12 mb-6">Our Craft</h2>
            <p className="text-velmora-secondary text-lg leading-relaxed mb-6">
              Every Velmora piece begins as a sketch in our design studio, where our team of artisans translates 
              inspiration into wearable art. We use 18K gold plating over responsibly sourced brass, ensuring 
              each piece is both beautiful and kind to sensitive skin.
            </p>
            <p className="text-velmora-secondary text-lg leading-relaxed mb-6">
              Our demi-fine approach means you get the look and feel of luxury jewelry at a fraction of the price. 
              We've eliminated the traditional retail markup by selling directly to you — no middlemen, no inflated prices.
            </p>
            <h2 className="font-serif text-3xl text-velmora-text mt-12 mb-6">Our Promise</h2>
            <p className="text-velmora-secondary text-lg leading-relaxed mb-6">
              We stand behind every piece we create. That's why we offer a 30-day return policy, free worldwide 
              shipping, and a commitment to hypoallergenic materials. Your satisfaction isn't just our goal — 
              it's our guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-velmora-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: 'Quality First', desc: '18K gold plated, hypoallergenic, built to last.' },
              { title: 'Direct to You', desc: 'No middlemen. Luxury prices, accessible to all.' },
              { title: 'Designed with Love', desc: 'Every piece tells a story of craftsmanship and care.' },
            ].map((value, i) => (
              <div key={i} className="p-6">
                <h3 className="font-serif text-2xl text-velmora-text mb-3">{value.title}</h3>
                <p className="text-velmora-secondary">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
