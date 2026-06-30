import React from 'react';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <main className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-charcoal-900/40" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl md:text-6xl text-cream-50 mb-4">Our Story</h1>
          <div className="w-12 h-px bg-gold-400 mx-auto" />
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-900 mb-6">
              Quiet Luxury, Thoughtfully Made
            </h2>
            <p className="text-charcoal-700 leading-relaxed mb-6">
              Velmora Fine Jewelry was founded with a singular vision: to create demi-fine jewelry that feels as good as it looks. 
              We believe that luxury shouldn't be loud — it should be felt. Each piece in our collection is designed to be worn, 
              loved, and passed down.
            </p>
            <p className="text-charcoal-700 leading-relaxed mb-6">
              Our materials are sourced with care. We use 18K gold-plated brass and ethically selected crystals, 
              crafted by skilled artisans who share our commitment to quality. The result is jewelry that is 
              beautiful, durable, and accessible.
            </p>
            <p className="text-charcoal-700 leading-relaxed mb-10">
              From our studio to your jewelry box, every Velmora piece is made with intention. 
              We hope it becomes part of your story.
            </p>
          </div>

          <div className="text-center">
            <Link to="/shop">
              <Button variant="primary">Shop the Collection</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
