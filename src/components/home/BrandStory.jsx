import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold rounded-lg -z-10 hidden md:block" />
          </div>

          {/* Content */}
          <div className="md:pl-8">
            <span className="inline-block font-sans text-xs tracking-ultra-wide text-gold uppercase mb-4">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6 leading-tight">
              Where Craft Meets <br />
              <span className="italic text-gold">Elegance</span>
            </h2>
            <div className="space-y-4 text-warmGray font-sans leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without compromise. We craft demi-fine pieces that marry the warmth of real gold with thoughtful, modern design.
              </p>
              <p>
                Each piece is designed in our studio and created with care, using ethically sourced materials and 18K gold plating that stands the test of time. We believe luxury should feel accessible, personal, and effortless.
              </p>
            </div>
            <div className="mt-8">
              <Link to="/about">
                <Button variant="secondary">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
