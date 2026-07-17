import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="bg-deep-900">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div className="aspect-[4/5] lg:aspect-auto bg-warm-800 flex items-center justify-center min-h-[400px]">
          <span className="text-warm-400 text-sm tracking-wider">BRAND IMAGE</span>
        </div>
        {/* Text */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-20">
          <p className="text-xs tracking-widest3 uppercase text-accent-light mb-4">Our Story</p>
          <h2 className="font-serif text-3xl lg:text-4xl text-cream font-light mb-6 leading-tight">
            Jewelry that lives<br /> in the moment with you
          </h2>
          <p className="text-deep-300 text-sm lg:text-base leading-relaxed mb-8 max-w-md">
            Velmora was born from the belief that fine jewelry should not be locked away for special occasions. Our pieces are crafted from 18K gold-plated brass with meticulous attention to detail — designed to be worn, layered, and lived in, every single day.
          </p>
          <p className="text-deep-300 text-sm lg:text-base leading-relaxed mb-8 max-w-md">
            Each design balances timeless elegance with modern sensibility. We source responsibly, produce in small batches, and believe that luxury is found in the feeling a piece gives you when you put it on.
          </p>
          <Link to="/about" className="btn-outline text-xs tracking-widest self-start">
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
