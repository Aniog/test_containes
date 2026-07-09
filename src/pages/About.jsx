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
    <div ref={containerRef} className="pt-24 md:pt-32 pb-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-3xl md:text-5xl tracking-wide text-text-primary">
            Our Story
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              alt="Velmora workshop"
              data-strk-img-id="about-workshop-g7h8i9"
              data-strk-img="[about-mission] Velmora jewelry workshop craftsmanship"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-text-primary mb-6">
              Crafted with Intention
            </h2>
            <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed mb-4">
              Velmora was born from a simple belief: that fine-quality jewelry should be
              accessible, not exclusive. Founded in 2023, we set out to create demi-fine
              pieces that rival traditional fine jewelry in craftsmanship and beauty,
              without the prohibitive price tag.
            </p>
            <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed mb-4">
              Every piece in our collection is crafted with 18K gold plating over a
              durable brass base, hand-set stones, and hypoallergenic materials. We
              believe that the right piece of jewelry can transform not just an outfit,
              but how you feel.
            </p>
            <p
              id="about-mission"
              className="font-sans text-sm md:text-base text-text-secondary leading-relaxed"
            >
              Our mission is simple: quiet luxury, intentional beauty, made to be treasured.
              We design for the woman who values quality over quantity, who knows that
              true elegance speaks softly.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: 'Quality First',
              text: 'Every piece undergoes rigorous quality checks. We use only premium materials that stand the test of time.',
            },
            {
              title: 'Sustainably Made',
              text: 'We partner with ethical manufacturers and use recycled materials wherever possible. Beautiful jewelry shouldn\'t cost the earth.',
            },
            {
              title: 'Designed to Last',
              text: 'Our timeless designs transcend trends. Each piece is created to be worn and loved for years, not seasons.',
            },
          ].map((value) => (
            <div key={value.title} className="text-center p-8">
              <h3 className="font-serif text-lg tracking-[0.15em] uppercase text-text-primary mb-3">
                {value.title}
              </h3>
              <div className="w-8 h-px bg-gold mx-auto mb-4" />
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                {value.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/shop"
            className="inline-block bg-gold hover:bg-gold-dark text-white font-sans text-xs tracking-[0.2em] uppercase px-10 py-4 transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
