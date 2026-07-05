import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStorySection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden bg-[#F5F0EB]">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-xs tracking-[0.3em] uppercase text-[#B8860B] mb-4">Our Story</p>
            <h2 className="serif-heading text-4xl md:text-5xl font-light text-[#1A1A1A] leading-tight mb-6">
              Where Elegance<br />Meets Everyday
            </h2>
            <div className="w-12 h-px bg-[#B8860B] mb-6" />
            <p className="text-[#6B6560] leading-relaxed mb-4">
              Velmora was born from a simple belief: that luxury jewelry shouldn't be reserved for special occasions. Every piece in our collection is designed to be worn, loved, and treasured — day after day.
            </p>
            <p className="text-[#6B6560] leading-relaxed mb-8">
              We use 18K gold plating over responsibly sourced brass, ensuring each piece is both beautiful and hypoallergenic. Our designs draw inspiration from nature, architecture, and the quiet confidence of the modern woman.
            </p>
            <Link to="/about" className="btn-secondary inline-block">
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
