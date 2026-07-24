import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section-padding bg-brand-cream">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <img
              data-strk-img-id="brand-story-image"
              data-strk-img="jewelry artisan workshop gold crafting hands elegant"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            {/* Decorative frame */}
            <div className="absolute inset-4 border border-brand-gold/30 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-label mb-4">Our Story</p>
            <h2 className="heading-section mb-6">
              Jewelry That Tells<br />
              <span className="italic text-brand-gold">Your Story</span>
            </h2>
            <div className="w-12 h-px bg-brand-gold mb-6" />
            <p className="text-brand-warmgray leading-relaxed mb-6">
              Velmora was born from a simple belief: everyone deserves to wear jewelry 
              that makes them feel extraordinary. We create demi-fine pieces that bridge 
              the gap between costume jewelry and fine jewelry — premium quality at 
              prices that don't require a special occasion to justify.
            </p>
            <p className="text-brand-warmgray leading-relaxed mb-8">
              Every piece is crafted with 18K gold plating over sterling silver, designed 
              to be hypoallergenic and built to last. Because we believe luxury should 
              be lived in, not locked away.
            </p>
            <Link to="/about" className="btn-outline">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
