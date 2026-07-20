import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="story" className="py-20 md:py-0 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-auto md:h-[600px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
              alt="Jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex items-center justify-center px-6 md:px-16 py-16 md:py-0 bg-parchment">
            <div className="max-w-md">
              <p className="text-xs tracking-[0.3em] uppercase text-gold font-medium mb-4">Our Story</p>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light mb-6 leading-snug">
                Designed with Intention, Worn with Confidence
              </h2>
              <p className="text-warmgray text-sm leading-relaxed mb-4">
                Velmora was born from a belief that fine jewelry should be accessible without compromising on quality or ethics. Each piece in our collection is thoughtfully designed in our studio and crafted using responsibly sourced materials.
              </p>
              <p className="text-warmgray text-sm leading-relaxed mb-8">
                Our 18K gold plating process ensures lasting brilliance, while our hypoallergenic standards mean everyone can wear our pieces comfortably, every day.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-charcoal hover:text-gold transition-colors group"
              >
                Read Our Story
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}