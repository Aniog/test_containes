import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-32">
      <div className="container-velmora">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
              alt="Velmora Fine Jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Our Story
            </h2>
            <div className="hairline w-24 mb-8" />
            <p className="font-sans text-lg leading-relaxed mb-6 text-[rgb(var(--color-foreground))]/80">
              At Velmora, we believe that fine jewelry should be accessible without compromising on quality.
              Our pieces are crafted with intention, using 18K gold plating and hypoallergenic materials
              that are designed to be worn every day.
            </p>
            <p className="font-sans text-lg leading-relaxed mb-8 text-[rgb(var(--color-foreground))]/80">
              Each design is inspired by the timeless elegance of classical jewelry, reimagined for the
              modern woman who values quiet luxury and understated beauty.
            </p>
            <Link
              to="/about"
              className="font-sans text-sm uppercase tracking-wider border-b-2 border-[rgb(var(--color-foreground))] pb-1 hover:text-[rgb(var(--color-accent))] hover:border-[rgb(var(--color-accent))] transition-colors inline-block"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
