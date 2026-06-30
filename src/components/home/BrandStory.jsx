import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-20 md:py-28 bg-cream-200/30">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-accent/30" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-[11px] uppercase tracking-[0.25em] text-accent mb-4 block">
              Our Story
            </span>
            <h2 className="section-title text-3xl md:text-4xl mb-6">
              Jewelry that tells your story
            </h2>
            <div className="space-y-4 text-charcoal-600 leading-relaxed mb-8">
              <p>
                Velmora was born from a simple belief: every woman deserves 
                jewelry that feels like it was made just for her. We craft 
                demi-fine pieces that bridge the gap between fashion and fine 
                jewelry, making luxury accessible without compromising on quality.
              </p>
              <p>
                Each piece is designed in our studio and crafted with 
                18K gold plating over premium brass, ensuring lasting beauty 
                you can wear every day. Our jewelry is hypoallergenic, 
                thoughtfully made, and designed to become part of your story.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm group"
            >
              <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-current after:origin-left after:scale-x-100 group-hover:after:scale-x-0 after:transition-transform after:duration-300">
                Discover Our Story
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
