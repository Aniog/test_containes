import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="bg-velmora-bg py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden order-2 lg:order-1">
            <img
              data-strk-img-id="brand-story-main"
              data-strk-img="jewelry artisan workshop gold warm light editorial craftsmanship"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry being crafted"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border border-velmora-border/30 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 lg:pl-4">
            <p className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-velmora-gold mb-6">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-velmora-text font-light leading-[1.15] mb-8">
              Jewelry that holds<br />
              <span className="italic text-velmora-gold-light">meaning</span>
            </h2>
            <div className="space-y-5 text-sm md:text-base text-velmora-text-muted leading-relaxed">
              <p>
                Velmora was born from a simple belief: fine jewelry should be worn,
                not locked away. We create demi-fine pieces in 18K gold plating that
                combine artisan craftsmanship with accessible pricing.
              </p>
              <p>
                Every piece is designed to transition seamlessly from morning coffee
                to evening cocktails — because luxury should be effortless. We use
                only hypoallergenic materials, ensuring comfort alongside beauty.
              </p>
              <p>
                From our studio to your jewelry box, each Velmora piece is crafted
                to become part of your story. A gift to yourself, or to someone
                who deserves to sparkle.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-8 text-xs tracking-[0.15em] uppercase text-velmora-gold border-b border-velmora-gold/40 pb-1 hover:border-velmora-gold transition-colors duration-300"
            >
              Read Our Full Story &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
