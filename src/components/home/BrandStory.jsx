import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-charcoal-100 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="section-subtitle">Our Philosophy</p>
            <h2 className="section-title mt-2 mb-6">Jewelry That Tells<br />Your Story</h2>
            <div className="space-y-4 text-charcoal-600 leading-relaxed">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry shouldn't come with a luxury markup. We craft each piece with the same care and attention to detail as heritage houses, using 18K gold plating over recycled brass.
              </p>
              <p>
                Every design is thoughtfully created to transition seamlessly from day to night, from boardroom to weekend brunch. Pieces that feel like they were made just for you — because in many ways, they were.
              </p>
            </div>
            <Link
              to="#"
              className="inline-block mt-8 text-xs tracking-widest uppercase text-charcoal-900 border-b border-charcoal-900 pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
