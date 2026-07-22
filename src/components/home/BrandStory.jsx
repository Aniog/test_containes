import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="bg-velmora-sand/30">
      <div className="container-wide section-padding py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-0 items-center">
          {/* Image */}
          <div className="aspect-[4/3] md:aspect-auto md:h-[500px] order-2 md:order-1 relative overflow-hidden">
            <img
              alt="Velmora brand story — gold jewelry craftsmanship"
              data-strk-img-id="brand-story-img-c5d6e7"
              data-strk-img={`[brand-story-text] [brand-story-heading]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-12 md:py-0 md:pl-16 lg:pl-24 order-1 md:order-2">
            <p className="font-sans text-[10px] tracking-superwide uppercase text-velmora-taupe mb-3">
              Our Philosophy
            </p>
            <h2 id="brand-story-heading" className="font-serif text-3xl md:text-4xl tracking-wider text-velmora-charcoal mb-6">
              Gold That Moves<br />With You
            </h2>
            <p id="brand-story-text" className="text-sm md:text-base text-velmora-warmgray leading-relaxed mb-4 max-w-md">
              Velmora was born from a belief that fine jewelry shouldn't be reserved for special occasions. 
              Our demi-fine pieces are crafted from 18K gold plate and hypoallergenic metals — designed to be 
              worn every day, from the office to the after-party.
            </p>
            <p className="text-sm md:text-base text-velmora-warmgray leading-relaxed mb-8 max-w-md">
              Each piece is designed in our London studio and brought to life by master artisans. 
              We believe in accessible luxury — exceptional quality at an honest price.
            </p>
            <Link to="/shop" className="btn-outline inline-flex text-xs">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
