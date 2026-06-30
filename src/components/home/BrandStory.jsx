import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
              alt="Jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:py-8">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-base leading-tight mb-6">
              Jewelry That Feels
              <br />
              Like Home
            </h2>
            <div className="space-y-4 text-text-secondary font-sans text-sm leading-relaxed max-w-md">
              <p>
                Velmora was born from a simple belief: that fine jewelry should
                be worn daily, not saved for special occasions. Our demi-fine
                pieces bridge the gap between costume and fine jewelry —
                crafted with 18K gold plating, designed to last, and priced so
                you can collect them.
              </p>
              <p>
                Each piece is designed in our studio and brought to life by
                artisans who share our obsession with detail. We use
                hypoallergenic materials because beauty should never come at the
                cost of comfort.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 font-sans text-xs uppercase tracking-widest font-medium text-base hover:text-gold transition-colors duration-300 group"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
