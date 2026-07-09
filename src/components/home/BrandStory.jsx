import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section-padding bg-[#faf8f5]">
      <div className="container-padding">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-xs tracking-[0.3em] uppercase text-[#c9a96e] mb-4">Our Story</p>
            <h2 className="serif-heading text-3xl md:text-4xl mb-6 leading-tight">
              Where Tradition Meets Modern Elegance
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't come with a luxury markup. 
              We work directly with master artisans to create demi-fine pieces that rival the quality of high-end 
              designers, at a fraction of the price.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Every piece is crafted with 18K gold plating over recycled brass, using ethically sourced materials 
              and hypoallergenic findings. Because luxury should feel good in every sense.
            </p>
            <Link to="/about" className="text-sm tracking-wider uppercase text-[#c9a96e] hover:text-[#a8894d] transition-colors border-b border-[#c9a96e] pb-1">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
