import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="section-padding py-16 md:py-24 bg-velmora-cream">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Image */}
        <div className="relative aspect-[4/5] bg-velmora-sand overflow-hidden">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="[brand-title] gold jewelry artisan craft making"
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&auto=format&fit=crop"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:pl-8">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-velmora-gold mb-4">
            Our Philosophy
          </p>
          <h2
            id="brand-title"
            className="font-serif text-3xl md:text-5xl tracking-wide mb-6 leading-tight"
          >
            Designed to Elevate
            <br />
            the Everyday
          </h2>
          <div className="space-y-4 text-velmora-stone leading-relaxed mb-8">
            <p>
              Velmora was born from a simple belief: fine jewelry should not be reserved for special occasions alone. Every piece in our collection is designed to become a part of your daily ritual — the earrings you reach for without thinking, the necklace that never leaves your neck.
            </p>
            <p>
              We work with master artisans who share our obsession for detail. Each piece is cast in premium brass and finished with a generous layer of 18-karat gold plating, engineered to maintain its warmth and luster through years of wear.
            </p>
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-velmora-dark hover:text-velmora-gold transition-colors group"
          >
            Our Story
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
