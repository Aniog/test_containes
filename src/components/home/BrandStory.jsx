import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-sm overflow-hidden">
            <div
              className="absolute inset-0 bg-velmora-sand/30"
              data-strk-bg-id="brand-story-img"
              data-strk-bg="gold jewelry artisan crafting workshop elegant hands"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <p className="text-xs tracking-widest uppercase text-velmora-gold mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-espresso leading-tight mb-6">
              Where Quiet Luxury Meets Modern Craft
            </h2>
            <p className="text-velmora-taupe leading-relaxed mb-4">
              Velmora was born from a simple belief: fine jewelry should feel attainable, not exclusive. 
              We design demi-fine pieces using 18K gold plating and hypoallergenic materials — 
              so you can wear luxury every day without the compromise.
            </p>
            <p className="text-velmora-taupe leading-relaxed mb-8">
              Every collection is thoughtfully curated to transition seamlessly from morning meetings 
              to evening celebrations. Because the best jewelry is the kind you never want to take off.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-velmora-espresso hover:text-velmora-gold transition-colors group"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
