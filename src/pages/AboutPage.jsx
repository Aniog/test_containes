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
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div
          data-strk-bg-id="about-hero-bg-g7h8i9"
          data-strk-bg="[about-hero-title] [about-section]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 id="about-hero-title" className="serif-heading text-5xl md:text-7xl mb-4">Our Story</h1>
          <p className="text-sm tracking-widest uppercase text-white/80">Crafted with intention</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <div className="prose prose-lg mx-auto">
          <p className="serif-heading text-2xl md:text-3xl leading-relaxed mb-8 text-center">
            Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury budget.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Founded in 2024, we set out to create demi-fine jewelry that bridges the gap between fast fashion 
            and fine jewelry. Every piece is designed in-house, crafted with 18K gold plating over a brass base, 
            and finished with hypoallergenic materials safe for sensitive skin.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our name comes from "vel" — meaning beautiful — and "mora" — meaning pause. We believe jewelry 
            should make you pause, even for a moment, to appreciate the beauty in everyday moments.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We work with small ateliers who share our commitment to quality and ethical production. Each piece 
            passes through multiple quality checks before reaching you, because we believe you deserve jewelry 
            that lasts.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <h3 className="serif-heading text-xl mb-3">Quality First</h3>
            <p className="text-sm text-muted-foreground">18K gold plating, hypoallergenic materials, rigorous quality checks.</p>
          </div>
          <div className="text-center">
            <h3 className="serif-heading text-xl mb-3">Ethical Craft</h3>
            <p className="text-sm text-muted-foreground">Small-batch production with trusted ateliers who share our values.</p>
          </div>
          <div className="text-center">
            <h3 className="serif-heading text-xl mb-3">Accessible Luxury</h3>
            <p className="text-sm text-muted-foreground">Premium design at prices that make everyday luxury possible.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
