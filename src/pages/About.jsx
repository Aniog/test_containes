import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function About() {
  return (
    <div className="min-h-screen bg-[#F7F3EB] pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-[#0D0C0A]">
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80" 
          alt="Velmora atelier"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-5xl md:text-6xl text-white tracking-[2px]">Our Story</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-lg text-[#1C1B19]">
          <p className="text-xl leading-relaxed text-[#6B6259]">
            Velmora was founded in 2018 with a singular vision: to create demi-fine jewelry that feels as precious as solid gold, but accessible enough to be worn every day.
          </p>

          <div className="my-12 h-px bg-[#E5DFD3]" />

          <h2 className="font-serif text-3xl text-[#1C1B19] tracking-wide">The Philosophy</h2>
          <p>
            We believe jewelry should be lived in, not locked away. Our pieces are designed to become part of your story — worn to coffee dates, board meetings, beach walks, and everything in between.
          </p>
          <p>
            Each collection is thoughtfully considered. We source the finest 18K gold plating and hypoallergenic materials, working with artisans who share our commitment to quality and restraint.
          </p>

          <div className="my-12 h-px bg-[#E5DFD3]" />

          <h2 className="font-serif text-3xl text-[#1C1B19] tracking-wide">The Details</h2>
          <p>
            Every Velmora piece is plated with 18K gold over a base of hypoallergenic brass or sterling silver. Our stones are hand-selected. Our finishes are hand-applied. We test each design for comfort, durability, and beauty.
          </p>
          <p>
            We offer free worldwide shipping because we believe everyone deserves access to quiet luxury. And we stand behind every piece with a 30-day return policy.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link to="/shop">
            <Button size="lg">Explore the Collection</Button>
          </Link>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white border-y border-[#E5DFD3] py-14">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {[
            { title: "Thoughtful Design", desc: "Every curve, every clasp, every detail is considered." },
            { title: "Responsible Sourcing", desc: "We work only with suppliers who share our values." },
            { title: "Lasting Quality", desc: "Pieces made to be worn daily, for years to come." },
          ].map((v, i) => (
            <div key={i}>
              <h3 className="font-serif text-2xl text-[#1C1B19] mb-3">{v.title}</h3>
              <p className="text-[#6B6259] text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}