import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-cream overflow-hidden">
            <img
              src="https://placehold.co/800x1000/ede8df/1a1814?text=Velmora+Atelier"
              alt="Velmora atelier"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <p className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight mb-6">
              Jewelry with soul,<br />made to last.
            </h2>
            <div className="space-y-4 text-warm-gray leading-relaxed">
              <p>
                Velmora was born from a simple belief: fine jewelry shouldn't be reserved for special occasions. 
                Our pieces are designed to be worn daily — to become part of your story.
              </p>
              <p>
                Each design is crafted in California using ethically sourced materials and 18K gold plating 
                over hypoallergenic brass. We believe in quiet luxury: pieces that speak softly but leave 
                a lasting impression.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center mt-8 text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-ink border-b border-ink pb-1 hover:text-gold hover:border-gold transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
