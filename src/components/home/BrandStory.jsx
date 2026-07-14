import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="aspect-[4/5] bg-[#f5f5f0] rounded-lg overflow-hidden">
            <img
              src="https://placehold.co/800x1000/f5f5f0/b8860b?text=Velmora+Story"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-lg">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-4 tracking-wide">
              Our Story
            </h2>
            <div className="w-12 h-px bg-[#b8860b] mb-6" />
            <p className="text-[#5c5c5c] leading-relaxed mb-6">
              Velmora was born from a simple belief: that beautiful jewelry should be accessible, ethical, and designed to be worn every day. We create demi-fine pieces that bridge the gap between fine jewelry and everyday accessories.
            </p>
            <p className="text-[#5c5c5c] leading-relaxed mb-8">
              Each piece is crafted with 18K gold plating over hypoallergenic brass, ensuring lasting beauty without the luxury price tag. From our studio to your jewelry box, we're committed to quality, sustainability, and designs that tell your story.
            </p>
            <Link to="/about">
              <Button variant="secondary">Read Our Story</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
