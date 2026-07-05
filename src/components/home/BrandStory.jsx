import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[var(--color-gold-primary)] -z-10" />
          </div>

          {/* Content */}
          <div className="py-8 lg:py-0">
            <p className="text-xs tracking-[0.3em] text-[var(--color-gold-primary)] mb-4">
              OUR STORY
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] leading-tight mb-6">
              Jewelry that tells your story
            </h2>
            <div className="space-y-4 text-[var(--color-text-secondary)]">
              <p>
                Founded in 2019, Velmora began with a simple belief: every woman deserves to wear jewelry that makes her feel extraordinary, without the extraordinary price tag.
              </p>
              <p>
                Our pieces are crafted by skilled artisans using ethically sourced materials — 18K gold plating over hypoallergenic bases, set with carefully selected cubic zirconia and crystals that catch light the way diamonds do.
              </p>
              <p>
                Each design is timeless yet contemporary, meant to be worn today and treasured for years to come. This is jewelry for real life — approachable, beautiful, and made to be loved.
              </p>
            </div>
            <Link 
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm tracking-wider text-[var(--color-text-primary)] hover:text-[var(--color-gold-primary)] transition-colors group"
            >
              <span>Discover Our Journey</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
