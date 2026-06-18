import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="bg-cream">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0">
        {/* Image */}
        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[640px] overflow-hidden bg-stone-warm">
          <img
            alt="A jeweler shaping gold by hand in our atelier"
            data-strk-img-id="velmora-story-image"
            data-strk-img="[story-headline] jeweler crafting gold jewelry by hand small atelier warm lighting"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1100"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex items-center px-6 md:px-16 py-20 md:py-32">
          <div className="max-w-md">
            <p className="text-[11px] uppercase tracking-eyebrow text-gold font-medium">
              Our Story
            </p>
            <h2
              id="story-headline"
              className="mt-4 font-serif text-4xl md:text-5xl font-light text-espresso leading-tight"
            >
              Heirlooms for the everyday.
            </h2>
            <div className="mt-7 space-y-5 text-charcoal text-base leading-relaxed">
              <p>
                Velmora was founded on a quiet idea: that the most meaningful jewelry isn't reserved for occasions. It's the piece you reach for every morning, the one that becomes part of you.
              </p>
              <p>
                Each design is shaped in our New York studio and produced in small batches by jewelers we know by name. We use 18K gold plate over recycled brass, hand-finished, and built to last.
              </p>
            </div>

            <Link
              to="/about"
              className="mt-10 inline-block text-xs uppercase tracking-eyebrow text-espresso border-b border-espresso pb-1 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
