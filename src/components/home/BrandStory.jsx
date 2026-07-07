import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section id="about" className="py-16 md:py-24 bg-velmora-border-light">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-c4d8e2"
              data-strk-img="gold jewelry artisan crafting workshop warm lighting elegant"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="font-sans text-xs tracking-mega-wide uppercase text-velmora-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-heading-lg md:text-heading-xl text-velmora-deep mb-6">
              Jewelry That Feels Like You
            </h2>
            <div className="w-12 h-px bg-velmora-gold mb-6" />
            <p className="font-sans text-sm md:text-base text-velmora-muted leading-relaxed mb-4">
              Velmora was born from a simple belief: every woman deserves jewelry that feels
              luxurious without the luxury price tag. We create demi-fine pieces in 18K
              gold plating that you can wear from morning coffee to midnight cocktails.
            </p>
            <p className="font-sans text-sm md:text-base text-velmora-muted leading-relaxed mb-8">
              Each piece is designed in our studio, hand-finished by skilled artisans, and
              tested for everyday wear. We use only hypoallergenic materials because your
              skin deserves better. No shortcuts, no compromises — just beautiful jewelry
              crafted to be treasured.
            </p>
            <Link to="/shop" className="btn-outline">
              Discover the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
