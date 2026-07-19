import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F1] pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-[#1A1816]">
        <img
          src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1600&q=90"
          alt="Velmora atelier"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-[#F8F5F1] text-5xl font-medium tracking-[-0.02em]">Our Story</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-neutral max-w-none text-[#6B635C] leading-relaxed space-y-6">
          <p className="text-xl text-[#1A1816] font-light tracking-[-0.01em]">
            Velmora was founded with a simple conviction: that everyday jewelry should feel as precious as the moments it marks.
          </p>

          <p>
            We believe in the quiet power of well-made things. In a world of fast fashion and fleeting trends, 
            we chose to slow down. Each piece in our collection is designed to be worn daily, to become part of your story, 
            and to last for years — not seasons.
          </p>

          <p>
            Our demi-fine pieces are crafted from 18K gold plating over sterling silver. They're hypoallergenic, 
            water-resistant, and made with the same attention to detail you'd expect from fine jewelry — 
            at a price that makes collecting them feel joyful, not indulgent.
          </p>

          <div className="py-8 border-y border-[#E5DFD6] my-8">
            <h3 className="font-medium text-[#1A1816] tracking-[0.05em] text-sm mb-4">THE VELMORA PROMISE</h3>
            <ul className="space-y-2 text-sm">
              <li>• Ethically sourced materials</li>
              <li>• Hand-finished in small batches</li>
              <li>• Designed for everyday wear</li>
              <li>• Backed by our 30-day guarantee</li>
            </ul>
          </div>

          <p>
            Whether you're treating yourself or finding the perfect gift, we hope our jewelry brings you 
            a quiet kind of joy — the kind that comes from wearing something beautiful that was made with care.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link to="/shop" className="btn btn-gold">
            Explore the Collection
          </Link>
        </div>
      </div>

      {/* Values */}
      <div className="bg-[#F5F2ED] py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {[
            { title: "Thoughtful Design", desc: "Every curve, every clasp, every detail is considered." },
            { title: "Lasting Quality", desc: "Pieces made to be worn daily, for years to come." },
            { title: "Accessible Luxury", desc: "Premium materials at a price that feels right." },
          ].map((v, i) => (
            <div key={i}>
              <h4 className="font-medium tracking-[0.05em] mb-2">{v.title}</h4>
              <p className="text-sm text-[#6B635C]">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
