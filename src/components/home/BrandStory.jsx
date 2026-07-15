import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-20 md:py-28 bg-brand-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="aspect-[4/5] bg-brand-charcoal rounded-sm overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('https://placehold.co/800x1000/1a1a1a/d4af37?text=Velmora+Story')`,
              }}
            />
          </div>
          <div>
            <h2 className="section-title mb-6">Our Story</h2>
            <div className="space-y-4 text-brand-muted leading-relaxed">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry should be accessible, ethical, and designed for real life.
              </p>
              <p>
                Founded in 2020, we create demi-fine pieces that bridge the gap between fine jewelry and everyday wear. Each design is thoughtfully crafted using 18K gold-plated materials and hypoallergenic components, so you can wear them with confidence from morning to night.
              </p>
              <p>
                From our studio in California to your jewelry box, every Velmora piece is made to be treasured — by you, or someone special.
              </p>
            </div>
            <Link to="/about" className="btn-outline mt-8 inline-block">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
