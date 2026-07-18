import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function AboutPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center">
        <div
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="[about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 id="about-hero-title" className="serif-heading text-5xl md:text-7xl">
            Our Story
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg mx-auto">
          <p className="serif-heading text-2xl md:text-3xl text-center mb-12 leading-relaxed">
            Velmora was founded on the belief that luxury jewelry should be accessible, 
            sustainable, and designed for real life.
          </p>
          
          <div className="space-y-6 text-[#6B6560] font-light leading-relaxed">
            <p>
              Founded in 2020, Velmora emerged from a simple observation: the jewelry market was divided 
              between expensive fine jewelry and cheap fashion pieces that tarnished after a few wears. 
              We saw an opportunity to create something in between — demi-fine jewelry that looks and feels 
              luxurious, without the luxury price tag.
            </p>
            
            <p>
              Every piece in our collection is crafted with 18K gold plating over high-quality base metals, 
              ensuring durability and a rich, lasting finish. We source hypoallergenic materials because we 
              believe beautiful jewelry should be comfortable enough to wear every day.
            </p>

            <h2 className="serif-heading text-3xl text-[#1A1A1A] mt-12 mb-6">Our Craft</h2>
            
            <p>
              Our design team draws inspiration from both timeless elegance and contemporary aesthetics. 
              Each piece undergoes rigorous quality testing to ensure it meets our standards for beauty, 
              durability, and comfort.
            </p>

            <p>
              We work with skilled artisans who bring decades of experience to every piece. From the initial 
              sketch to the final polish, each step is carefully monitored to ensure the highest quality.
            </p>

            <h2 className="serif-heading text-3xl text-[#1A1A1A] mt-12 mb-6">Our Promise</h2>
            
            <p>
              We're committed to transparency, sustainability, and customer satisfaction. Our packaging is 
              made from recycled materials, and we're constantly working to reduce our environmental footprint.
            </p>

            <p>
              When you choose Velmora, you're choosing jewelry that's crafted with care, designed to last, 
              and priced fairly. That's our promise to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
