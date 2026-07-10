import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
                alt="Velmora jewelry crafting"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold -z-10 hidden md:block" />
          </div>

          {/* Content */}
          <div className="py-8 md:py-0">
            <span className="inline-block font-sans text-xs uppercase tracking-[0.2em] text-gold mb-4">
              Our Story
            </span>
            <h2 className="font-serif text-section text-espresso mb-6 leading-tight">
              Jewelry That Tells Your Story
            </h2>
            <div className="space-y-4 text-stone leading-relaxed">
              <p>
                At Velmora, we believe every woman deserves to wear jewelry that makes her feel special, 
                not just on special occasions, but every day.
              </p>
              <p>
                Our demi-fine collection bridges the gap between fashion jewelry and fine jewelry — 
                offering exceptional quality, beautiful design, and accessible prices. Each piece is 
                crafted with 18K gold plating over hypoallergenic materials.
              </p>
              <p>
                Founded in 2019, Velmora began in a small studio with a big dream: to create 
                jewelry that women would treasure for years to come.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 font-sans text-sm font-medium text-gold hover:text-gold-hover transition-colors group"
            >
              Read Our Story
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
