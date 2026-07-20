import React from "react";
import { Link } from "react-router-dom";

export function BrandStory() {
  return (
    <section className="section max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image side */}
        <div className="aspect-[4/3] bg-gradient-to-br from-[#3D3730] to-[#2C2823] relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="inline-block p-8 border border-[var(--color-gold)]/30">
                <span className="text-[var(--color-gold)] text-xs tracking-[0.3em]">EST. 2019</span>
                <div className="mt-4 text-white/60 text-sm tracking-widest">NEW YORK • PARIS • TOKYO</div>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-8 right-8 w-24 h-24 border border-white/10 rounded-full" />
          <div className="absolute bottom-12 left-12 w-16 h-px bg-[var(--color-gold)]/30" />
        </div>

        {/* Text side */}
        <div className="max-w-lg">
          <span className="text-xs tracking-[0.15em] text-[var(--color-text-muted)] uppercase">Our Philosophy</span>
          <h2 className="heading-serif text-4xl mt-2 mb-6">Jewelry that feels like you.</h2>
          
          <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
            <p>
              Velmora was born from a simple belief: that fine jewelry should be worn every day, 
              not saved for special occasions. We design demi-fine pieces that bridge the gap 
              between precious and practical.
            </p>
            <p>
              Each piece is crafted from 18K gold-plated brass, chosen for its durability, 
              hypoallergenic properties, and warm, lasting luster. Our designs are timeless 
              by intention—meant to become part of your daily ritual.
            </p>
          </div>

          <Link
            to="/about"
            className="inline-block mt-8 text-sm tracking-[0.1em] uppercase border-b border-[var(--color-text)] pb-0.5 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
          >
            Read Our Story →
          </Link>
        </div>
      </div>
    </section>
  );
}
