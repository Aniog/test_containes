import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Image Side */}
        <div className="relative aspect-square md:aspect-[3/4] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=1000&fit=crop"
            alt="Velmora jewelry craftsmanship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 border-2 border-velmora-gold/20 m-4 md:m-8" />
        </div>

        {/* Text Side */}
        <div className="max-w-lg">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Our Story
          </h2>

          <div className="hairline w-16 mb-8" />

          <p className="text-lg text-velmora-stone mb-6 leading-relaxed">
            At Velmora, we believe that jewelry should be as unique as the moments it celebrates. Each piece in our collection is thoughtfully designed and meticulously crafted to become a cherished part of your story.
          </p>

          <p className="text-lg text-velmora-stone mb-8 leading-relaxed">
            From the initial sketch to the final polish, we pour our hearts into creating demi-fine jewelry that bridges the gap between luxury and accessibility. Our 18K gold-plated pieces are designed to be worn, loved, and treasured for years to come.
          </p>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-velmora-gold hover:text-velmora-gold-dark transition-colors duration-300 group"
          >
            Discover Our Journey
            <ArrowRight
              size={18}
              className="transform group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
