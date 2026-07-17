import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24 bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="aspect-[4/5] bg-background rounded-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-lg">
            <p className="eyebrow mb-3">Our Story</p>
            <h2 className="section-heading mb-5">Jewelry with intention</h2>
            <p className="text-ink-secondary leading-relaxed mb-4">
              Velmora was founded on a simple belief: fine jewelry should feel accessible, wearable, and meaningful. We design each piece in-house, working with small ateliers to bring warm, editorial designs to life in 18K gold-plated brass.
            </p>
            <p className="text-ink-secondary leading-relaxed mb-8">
              From the first sketch to the final polish, we obsess over the details so you can enjoy jewelry that feels as good as it looks.
            </p>
            <Link to="/about" className="btn-outline">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
