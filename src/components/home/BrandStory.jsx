import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="section-title">Our Story</h2>
            <div className="space-y-4 text-brand-muted leading-relaxed">
              <p>
                Velmora was born from a simple belief: that fine jewelry should be accessible, meaningful, and designed for real life.
              </p>
              <p>
                Founded in 2020, we create demi-fine pieces that blend timeless craftsmanship with contemporary design. Every item is thoughtfully crafted using 18K gold-plated materials and hypoallergenic components, so you can wear them with confidence every day.
              </p>
              <p>
                From our studio in California to your doorstep, we're committed to quality, sustainability, and creating jewelry that tells your story.
              </p>
            </div>
            <Link to="/about" className="btn-outline inline-flex">
              Read More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
