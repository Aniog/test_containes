import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-editorial">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=900&q=80"
              alt="Velmora brand story"
              className="h-72 w-full object-cover md:h-[480px]"
            />
          </div>
          <div className="space-y-5">
            <p className="eyebrow">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink">Designed to be worn,<br />not saved for later.</h2>
            <p className="text-sm md:text-base text-ink-secondary leading-relaxed">
              Velmora was founded on a simple belief: fine jewelry should feel effortless. We create demi-fine pieces in warm 18K gold plating that transition from day to night, desk to dinner, and everyday moments to celebrations.
            </p>
            <p className="text-sm md:text-base text-ink-secondary leading-relaxed">
              Every design is made with intention, finished by hand, and packaged in recyclable materials because we believe luxury and responsibility belong together.
            </p>
            <Link to="/about" className="btn-outline">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
