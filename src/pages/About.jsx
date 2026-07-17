import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="eyebrow mb-3">Our Story</p>
        <h1 className="section-heading mb-6">Jewelry with intention</h1>
        <div className="space-y-5 text-ink-secondary leading-relaxed">
          <p>
            Velmora was founded on a simple belief: fine jewelry should feel accessible, wearable, and meaningful. We design each piece in-house, working with small ateliers to bring warm, editorial designs to life in 18K gold-plated brass.
          </p>
          <p>
            From the first sketch to the final polish, we obsess over the details so you can enjoy jewelry that feels as good as it looks. Every piece is hypoallergenic, thoughtfully packaged, and made to be worn every day.
          </p>
          <p>
            We believe in quiet luxury — jewelry that speaks softly but leaves a lasting impression. That is the Velmora standard.
          </p>
        </div>

        <div className="mt-10">
          <Link to="/shop" className="btn-primary">
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
