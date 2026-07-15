import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-[#F5F2ED] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[2px] text-[#C5A46E] mb-3">ESTABLISHED 2019</p>
          <h1 className="font-serif text-5xl tracking-[1.5px] mb-6">Our Story</h1>
          <p className="text-lg text-[#5C5651]">Jewelry that feels personal, not performative.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-neutral max-w-none text-[#5C5651] leading-relaxed space-y-6">
          <p>
            Velmora was founded with a simple belief: that beautiful jewelry should be accessible without compromise. 
            We create demi-fine pieces that sit comfortably between fine jewelry and fast fashion — thoughtfully designed, 
            responsibly made, and meant to be worn every day.
          </p>
          <p>
            Each collection begins in our studio, where we sketch, prototype, and refine until every curve and proportion 
            feels exactly right. We work exclusively with 18K gold plating over hypoallergenic brass, ensuring our pieces 
            are as kind to skin as they are to the eye.
          </p>
          <p>
            We believe in quiet luxury. Our designs are never loud, never trend-chasing. They are objects of calm beauty 
            that become part of your daily ritual — the earrings you reach for without thinking, the necklace that feels 
            like an extension of yourself.
          </p>
        </div>

        <div className="my-16 h-px bg-[#E8E4DE]" />

        <div className="grid md:grid-cols-3 gap-10 text-sm">
          <div>
            <h3 className="font-serif text-xl tracking-[1px] mb-3">Craft</h3>
            <p className="text-[#5C5651]">Every piece is cast, plated, and finished by hand in small batches. We inspect each item three times before it leaves our studio.</p>
          </div>
          <div>
            <h3 className="font-serif text-xl tracking-[1px] mb-3">Materials</h3>
            <p className="text-[#5C5651]">18K gold plating over solid brass. Nickel-free, lead-free, and hypoallergenic. Stones are hand-selected for color and clarity.</p>
          </div>
          <div>
            <h3 className="font-serif text-xl tracking-[1px] mb-3">Packaging</h3>
            <p className="text-[#5C5651]">Arrives in a velvet-lined keepsake box with a polishing cloth and care card. Ready to gift, or to treasure yourself.</p>
          </div>
        </div>
      </div>

      <div className="bg-[#2C2825] text-white py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="font-serif text-2xl tracking-[1px] mb-4">Crafted to be Treasured</p>
          <p className="text-[#8B8178] mb-8">Every piece tells a story. We hope yours begins with Velmora.</p>
          <Link to="/shop" className="inline-block border border-white/40 px-8 py-3 text-sm tracking-[1.5px] hover:bg-white hover:text-[#2C2825] transition-colors">
            SHOP THE COLLECTION
          </Link>
        </div>
      </div>
    </div>
  );
}
