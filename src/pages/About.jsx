import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-[#F8F5F1]">
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 pt-16 pb-12 text-center">
        <h1 className="section-title mb-6">A Modern Heirloom</h1>
        <p className="text-lg text-[#5C5752] max-w-xl mx-auto">
          Velmora exists for the woman who finds beauty in the everyday — 
          who believes that the pieces she wears should feel as considered as the life she leads.
        </p>
      </div>

      {/* Large Image */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="aspect-[16/9] bg-[#1C1917] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1400&q=80" 
            alt="Velmora atelier" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Story Content */}
      <div className="max-w-3xl mx-auto px-6 pb-20">
        <div className="prose prose-neutral max-w-none text-[#5C5752] text-[15px] leading-relaxed space-y-6">
          <p>
            Founded in 2019, Velmora began with a single question: why should beautiful jewelry 
            be reserved for special occasions? We set out to create pieces that feel precious 
            enough to treasure, yet accessible enough to wear every day.
          </p>
          
          <p>
            Each design is crafted from 18K gold-plated brass with hypoallergenic findings. 
            We work with a small atelier that has been perfecting the art of demi-fine jewelry 
            for three generations. Every piece is plated multiple times for durability, 
            then hand-finished by artisans who treat each item as if it were solid gold.
          </p>

          <div className="py-8 border-y border-[#E5E0D8] my-8">
            <h3 className="font-serif text-2xl text-[#1C1917] mb-4 tracking-[-0.01em]">Our Promise</h3>
            <ul className="space-y-2 text-sm">
              <li>• 18K gold plating over solid brass core</li>
              <li>• Hypoallergenic posts and clasps</li>
              <li>• Tarnish-resistant finish</li>
              <li>• Designed to be worn daily for years</li>
              <li>• Ethically sourced materials</li>
            </ul>
          </div>

          <p>
            We believe in fewer, better things. Our collections are intentionally small. 
            We release new pieces only when they meet our standards for beauty, wearability, 
            and longevity. This is jewelry meant to become part of your story — 
            passed down, gifted, and worn until it feels like an extension of you.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link to="/shop" className="btn btn-gold inline-block">
            Explore the Collection
          </Link>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          {[
            { title: "Quiet Luxury", desc: "Understated elegance over trends. Pieces that whisper, never shout." },
            { title: "Everyday Wear", desc: "Designed for real life. Shower-safe, sleep-safe, life-safe." },
            { title: "Thoughtful Craft", desc: "Small batches. Hand-finished. Made to last longer than trends." },
          ].map((v, i) => (
            <div key={i}>
              <h4 className="font-serif text-xl mb-3 text-[#1C1917]">{v.title}</h4>
              <p className="text-sm text-[#5C5752]">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;