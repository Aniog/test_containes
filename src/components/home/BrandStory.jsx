import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 sm:py-24 bg-velmora-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <div
              className="absolute inset-0"
              data-strk-img-id="velmora-brand-story-img-3b8e2a"
              data-strk-img="[brand-story-heading] [brand-story-sub] Velmora jewelry craft workshop"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
            >
              <div className="w-full h-full bg-gradient-to-br from-velmora-sand via-velmora-taupe/30 to-velmora-warm" />
            </div>
            {/* Decorative frame */}
            <div className="absolute inset-4 border border-velmora-gold/20 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="lg:pl-6">
            <p id="brand-story-sub" className="text-[11px] tracking-[0.3em] uppercase text-velmora-gold font-medium mb-4">
              Our Story
            </p>
            <h2 id="brand-story-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-velmora-charcoal leading-[1.2] mb-6">
              Jewelry That<br />
              <span className="italic">Speaks to You</span>
            </h2>
            <div className="w-12 h-[1px] bg-velmora-gold mb-6" />
            <p className="text-velmora-muted text-sm sm:text-base leading-relaxed mb-4">
              Velmora was born from a simple belief: every woman deserves jewelry that feels luxurious without the luxury price tag. Our pieces are crafted with 18K gold plating over premium base metals, designed to be worn every day and treasured for years.
            </p>
            <p className="text-velmora-muted text-sm sm:text-base leading-relaxed mb-8">
              Each design is inspired by the intersection of classic elegance and modern minimalism — jewelry that moves with you, from morning coffee to evening cocktails.
            </p>
            <Link
              to="/about"
              className="inline-block text-xs tracking-[0.2em] uppercase font-medium text-velmora-charcoal border-b border-velmora-charcoal pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
