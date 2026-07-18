import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-20 px-4 bg-velmora-sand">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-velmora-gold/10 hidden md:block" />
          </div>

          {/* Text Side */}
          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl font-light">
              Crafted with<br />Intention
            </h2>
            <div className="w-16 h-px bg-velmora-gold" />
            <p className="text-lg leading-relaxed text-velmora-warm-gray">
              At Velmora, we believe that jewelry should be as unique as the woman who wears it. 
              Each piece in our collection is thoughtfully designed and meticulously crafted using 
              18K gold plating over high-quality brass, ensuring that your treasured pieces maintain 
              their beauty for years to come.
            </p>
            <p className="text-lg leading-relaxed text-velmora-warm-gray">
              Our demi-fine approach means you don't have to choose between quality and accessibility. 
              We've created a collection that feels luxurious, looks stunning, and fits beautifully 
              into your life — and your budget.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-velmora-charcoal hover:text-velmora-gold transition-colors group"
            >
              <span className="font-sans text-sm tracking-wider uppercase mr-2">Our Story</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
