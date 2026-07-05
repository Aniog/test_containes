import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <h2 className="section-title text-[var(--velmora-text)] mb-6">Our Story</h2>
            <div className="w-12 h-px bg-[var(--velmora-accent)] mb-6" />
            <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-6">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury budget. 
              We craft each piece with the same care and attention to detail as fine jewelry houses, 
              using 18K gold plating over recycled brass — because looking after the earth is just as 
              important as looking after yourself.
            </p>
            <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-8">
              Every design is tested for hypoallergenic wear, because sensitive skin shouldn't mean 
              sacrificing style. From our studio to your jewelry box, each piece is made to be treasured.
            </p>
            <Link to="/about" className="btn-outline inline-block">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
