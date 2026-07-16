import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

const About = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[420px] flex items-center justify-center bg-[#0F0F0F]">
        <img
          src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1800&q=80"
          alt="Velmora studio"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center px-6">
          <p className="text-[#C5A46E] tracking-[4px] text-sm mb-3">EST. 2019</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white tracking-[2px]">Our Story</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <div className="prose prose-neutral max-w-none">
          <p className="text-xl text-[#1A1A1A] leading-relaxed mb-8">
            Velmora was founded with a simple belief: that beautiful, well-made jewelry should be accessible without compromise.
          </p>

          <div className="my-12 h-px bg-[#E5E0D8]" />

          <p className="text-[#4A4640] leading-relaxed mb-6">
            We design demi-fine pieces that feel like heirlooms — quiet, considered, and meant to be worn every day. 
            Each collection begins in our New York studio, where we obsess over proportion, finish, and the way light moves across metal.
          </p>

          <p className="text-[#4A4640] leading-relaxed mb-6">
            We use 18K gold plating over solid brass, paired with responsibly sourced crystals. 
            Our pieces are hypoallergenic and designed to last, not just for a season, but for years.
          </p>

          <p className="text-[#4A4640] leading-relaxed mb-12">
            From the first sketch to the final polish, every Velmora piece passes through many hands. 
            We believe in slow, intentional making — and in jewelry that becomes part of your story.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-[#E5E0D8]">
          {[
            { label: '18K Gold Plated', desc: 'Premium plating that resists tarnish' },
            { label: 'Hypoallergenic', desc: 'Safe for sensitive skin' },
            { label: 'Ethically Made', desc: 'Small batch, responsibly sourced' },
          ].map((item, i) => (
            <div key={i}>
              <p className="font-serif text-xl text-[#1A1A1A] mb-2">{item.label}</p>
              <p className="text-sm text-[#8B8178]">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/shop">
            <Button variant="outline" size="lg">Explore the Collection</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
