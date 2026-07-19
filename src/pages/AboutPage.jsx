import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function AboutPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Hero */}
      <div className="relative h-[50vh] md:h-[60vh] flex items-center justify-center">
        <div
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="[about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <h1 id="about-hero-title" className="relative z-10 serif-heading text-4xl md:text-6xl text-white text-center px-4">
          Our Story
        </h1>
      </div>

      {/* Content */}
      <div className="container-padding py-16 md:py-24 max-w-3xl mx-auto">
        <div className="prose prose-lg mx-auto">
          <p className="serif-heading text-2xl md:text-3xl leading-relaxed mb-8 text-center">
            Velmora was born from a simple belief: luxury should be accessible, not exclusive.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Founded in 2020, we set out to create demi-fine jewelry that bridges the gap between 
            everyday pieces and heirloom treasures. Each design is thoughtfully crafted to be worn 
            daily and treasured always.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our pieces are made with 18K gold plating over quality brass, ensuring both beauty 
            and durability. We believe that the best jewelry isn't kept in a box — it's lived in, 
            loved, and becomes part of your story.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            From our studio to your doorstep, every Velmora piece is designed with the modern 
            woman in mind. Whether you're treating yourself or finding the perfect gift, we want 
            our jewelry to make you feel extraordinary — every single day.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <h3 className="serif-heading text-xl mb-3">Quality First</h3>
            <p className="text-muted-foreground text-sm">
              18K gold plating, hypoallergenic materials, and rigorous quality checks.
            </p>
          </div>
          <div className="text-center">
            <h3 className="serif-heading text-xl mb-3">Accessible Luxury</h3>
            <p className="text-muted-foreground text-sm">
              Premium design at prices that don't require a second mortgage.
            </p>
          </div>
          <div className="text-center">
            <h3 className="serif-heading text-xl mb-3">Sustainable</h3>
            <p className="text-muted-foreground text-sm">
              Eco-conscious packaging and responsible sourcing practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
