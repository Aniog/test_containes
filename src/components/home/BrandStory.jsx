import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-24 bg-[#F5F2ED]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Image Left */}
        <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-muted">
          <img
            alt="Brand Story"
            data-strk-img-id="brand-story-img"
            data-strk-img="[story-subtitle] jewelry workshop gold delicate"
            data-strk-img-ratio="3x4"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Right */}
        <div className="space-y-10">
          <p id="story-subtitle" className="text-xs uppercase tracking-[0.4em] text-accent font-medium">Our Philosophy</p>
          <h2 className="text-5xl md:text-7xl font-serif leading-tight">
            Elevating the <br />
            <span className="italic underline decoration-border underline-offset-[12px]">Everyday</span>
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg max-w-lg">
            <p>
              Velmora was born from a desire for jewelry that balances high-end design with democratic pricing. We believe that fine craftsmanship shouldn't be reserved for milestones alone.
            </p>
            <p>
              Every piece in our collection is meticulously designed in-house and crafted with responsibly sourced 18K gold plating over sterling silver or recycled brass. 
            </p>
          </div>
          <Link
            to="/about"
            className="inline-block text-xs uppercase tracking-[0.3em] font-medium border-b border-primary pb-2 hover:opacity-70 transition-opacity"
          >
            Learn Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
