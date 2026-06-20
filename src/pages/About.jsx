import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen pt-20 bg-[#F8F5F1]">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[420px] flex items-center justify-center bg-[#1A1816]">
        <img 
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=85" 
          alt="Velmora atelier" 
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center px-6">
          <span className="text-white/70 text-xs tracking-[0.2em] uppercase">Est. 2019</span>
          <h1 className="heading-serif text-white text-5xl md:text-6xl mt-2 tracking-[-0.01em]">Our Story</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <div className="prose prose-neutral max-w-none text-[#6B635C] text-[15px] leading-relaxed space-y-6">
          <p className="text-xl text-[#1A1816] font-serif tracking-[-0.01em]">
            Velmora was born from a simple belief: that beautiful jewelry should be accessible, not exclusive.
          </p>
          
          <p>
            We design demi-fine pieces that feel like heirlooms — crafted with intention, meant to be worn every day. 
            Each piece is plated in 18K gold over hypoallergenic brass, designed in our studio and brought to life 
            by artisans who share our commitment to quiet luxury.
          </p>

          <p>
            Our name comes from the Latin "vel" (veil) and "mora" (delay) — a reminder to slow down and savor 
            the small, beautiful moments. We believe jewelry should mark those moments, not just decorate them.
          </p>

          <div className="pt-6 border-t border-[#D9D2C8] mt-10">
            <h3 className="heading-serif text-2xl text-[#1A1816] mb-4">Our Promise</h3>
            <ul className="space-y-2 text-sm">
              <li>• 18K gold plating that lasts</li>
              <li>• Hypoallergenic materials for sensitive skin</li>
              <li>• Thoughtful packaging, ready for gifting</li>
              <li>• 30-day returns, no questions asked</li>
              <li>• Free worldwide shipping on every order</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#D9D2C8] flex flex-col sm:flex-row gap-4">
          <Link to="/shop" className="btn btn-primary">Shop the Collection</Link>
          <Link to="/journal" className="btn btn-outline">Read the Journal</Link>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            { title: "Slow Craft", desc: "Every piece is designed slowly and made with care. We release collections in small batches." },
            { title: "Honest Materials", desc: "We use 18K gold plate over solid brass. No nickel. No shortcuts. Just pieces that last." },
            { title: "Quiet Luxury", desc: "We believe the most beautiful things whisper, not shout. Timeless over trendy." },
          ].map((v, i) => (
            <div key={i}>
              <h4 className="heading-serif text-xl mb-3">{v.title}</h4>
              <p className="text-sm text-[#6B635C] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
