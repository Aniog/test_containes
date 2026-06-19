import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section-padding py-20 md:py-28 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-velmora-cream">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=1000&fit=crop"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-velmora-ivory/40 to-transparent" />
          </div>

          {/* Text */}
          <div className="lg:pl-4">
            <p className="font-sans text-caption uppercase tracking-widest-2xl text-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-heading-xl text-velmora-dark mb-6">
              Where Luxury Meets Everyday
            </h2>
            <p className="font-sans text-body-lg text-velmora-stone mb-5 leading-relaxed">
              Velmora was born from a simple belief: every woman deserves to feel adorned without compromise. Our pieces are crafted from the finest materials — 18K gold plating over surgical-grade metals — designed to be worn, loved, and treasured for years.
            </p>
            <p className="font-sans text-body text-velmora-stone mb-8 leading-relaxed">
              We work directly with artisans to bring you premium demi-fine jewelry at prices that don't sacrifice quality for accessibility. Each piece passes through multiple quality checks before it reaches you, because we believe luxury should be effortless.
            </p>
            <Link to="/about" className="btn-gold-outline inline-block">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
