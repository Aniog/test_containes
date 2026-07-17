import React from 'react';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="container-velmora">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
                alt="Velmora jewelry craftsmanship"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-gold/30 hidden lg:block" />
          </div>

          {/* Right: Text Content */}
          <div className="max-w-lg">
            <h2 className="font-serif text-4xl md:text-5xl mb-8">Our Story</h2>
            <div className="divider-hairline-dark mb-8" />

            <p className="font-sans text-lg leading-relaxed text-charcoal/80 mb-6">
              Velmora was born from a simple belief: jewelry should be as enduring as the moments it marks. Founded in 2020, we set out to create demi-fine pieces that bridge the gap between precious and accessible.
            </p>

            <p className="font-sans text-lg leading-relaxed text-charcoal/80 mb-8">
              Each piece in our collection is thoughtfully designed and crafted with 18K gold plating over high-quality brass, ensuring beauty that lasts. We believe in quiet luxury — pieces that whisper rather than shout, designed for the woman who knows her own style.
            </p>

            <p className="font-sans text-lg leading-relaxed text-charcoal/80 mb-12">
              From our studio to your jewelry box, every Velmora piece carries our commitment to quality, sustainability, and timeless design.
            </p>

            <a
              href="/about"
              className="btn-secondary inline-flex items-center gap-3"
            >
              Discover More
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
