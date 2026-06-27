import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-[3/4] bg-velmora-cream-dark rounded-sm overflow-hidden">
            <div
              className="absolute inset-0"
              data-strk-bg-id="story-img-velmora-01"
              data-strk-bg="[story-subtitle] [story-title]"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border border-velmora-gold/30 flex items-center justify-center opacity-40">
                <div className="w-4 h-4 bg-velmora-gold rounded-full" />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="md:py-6">
            <p
              id="story-subtitle"
              className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-velmora-gold mb-3"
            >
              Our Story
            </p>
            <h2
              id="story-title"
              className="font-serif text-[28px] md:text-[38px] font-light text-velmora-charcoal leading-[1.15] mb-5"
            >
              Jewelry That Feels Like You
            </h2>
            <div className="space-y-4 mb-8">
              <p className="font-sans text-[14px] md:text-[15px] text-velmora-warm-gray leading-relaxed">
                Velmora was born from a simple belief: fine jewelry should not be reserved for special occasions. Every piece in our collection is designed to become part of your daily ritual — a quiet statement of self-expression that feels as natural as your morning coffee.
              </p>
              <p className="font-sans text-[14px] md:text-[15px] text-velmora-warm-gray leading-relaxed">
                We use premium 18K gold plating over hypoallergenic brass, ensuring each piece is kind to sensitive skin and built to last. Our designs draw from architectural lines, natural forms, and the golden light of late afternoon.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-sans text-[12px] font-medium tracking-[0.1em] uppercase text-velmora-charcoal hover:text-velmora-gold transition-colors duration-300 group"
            >
              Discover Our Story
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}