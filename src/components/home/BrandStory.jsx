import { Link } from 'react-router-dom';

const BrandStory = () => (
  <section className="bg-velmora-soft py-24 md:py-32">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-soft order-2 md:order-1">
          <img
            alt="Velmora atelier"
            data-strk-img-id="brand-story-img-velmora"
            data-strk-img="[brand-story-title] artisan jewelry workshop hands crafting gold rings warm soft light editorial"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-xs uppercase tracking-[0.3em] text-velmora-gold mb-5">
            Our Story
          </p>
          <h2
            id="brand-story-title"
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-velmora-ink leading-[1.1] mb-7"
          >
            Heirlooms,
            <br />
            reimagined for today.
          </h2>
          <p className="text-velmora-muted leading-relaxed mb-5 max-w-lg">
            Velmora was born from a simple idea: jewelry should be loved every day, not locked
            away. Every piece is finished by hand in our atelier, plated in 18K gold over solid
            brass, and built to outlive the trends.
          </p>
          <p className="text-velmora-muted leading-relaxed mb-9 max-w-lg">
            Demi-fine quality, transparent prices, and the kind of warm, lived-in patina that only
            comes from being worn.
          </p>
          <Link
            to="/about"
            className="inline-block border-b border-velmora-ink pb-1 text-xs uppercase tracking-[0.3em] text-velmora-ink hover:text-velmora-gold hover:border-velmora-gold transition-colors"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default BrandStory;
