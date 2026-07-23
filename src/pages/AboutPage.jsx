import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const AboutPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-20 lg:pt-24">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="[about-title] [about-subtitle] jewelry workshop craftsmanship"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 id="about-title" className="serif-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            Our Story
          </h1>
          <p id="about-subtitle" className="text-white/80 max-w-lg mx-auto">
            Where tradition meets modern elegance
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
        <div className="prose prose-lg mx-auto">
          <p className="serif-heading text-2xl text-foreground leading-relaxed mb-8">
            Velmora was founded on a simple yet powerful idea: that beautiful jewelry should be 
            part of your everyday life, not reserved for special occasions.
          </p>
          <p className="text-[#6B6560] leading-relaxed mb-6">
            Our journey began in a small studio, where our founder — a lifelong lover of fine jewelry — 
            noticed a gap in the market. Luxury pieces were beautiful but unaffordable for daily wear. 
            Affordable jewelry lacked the quality and design that made pieces worth keeping.
          </p>
          <p className="text-[#6B6560] leading-relaxed mb-6">
            Velmora bridges that gap. We create demi-fine jewelry using 18K gold plating over 
            quality brass, with hypoallergenic materials and thoughtful design. Each piece is 
            crafted to feel luxurious, look editorial, and last through your daily rituals.
          </p>
          <p className="text-[#6B6560] leading-relaxed mb-6">
            Our name comes from the Latin "vel" (meaning "and") and "mora" (meaning "pause") — 
            a reminder to pause and appreciate the small, beautiful moments in life. Jewelry 
            isn't just an accessory; it's a way to mark those moments.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-[#E8E4DF]">
          {[
            {
              title: 'Quality First',
              desc: '18K gold plating, hypoallergenic materials, and rigorous quality checks on every piece.',
            },
            {
              title: 'Thoughtful Design',
              desc: 'Each piece is designed to be versatile — from boardroom to weekend, from day to night.',
            },
            {
              title: 'Accessible Luxury',
              desc: 'Premium quality at prices that let you build a collection, not just buy a single piece.',
            },
          ].map((value) => (
            <div key={value.title} className="text-center">
              <h3 className="serif-heading text-xl text-foreground mb-3">{value.title}</h3>
              <p className="text-sm text-[#6B6560] leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
