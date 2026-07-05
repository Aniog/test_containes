import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {/* Image */}
      <div className="aspect-[4/5] md:aspect-auto overflow-hidden bg-velmora-sand">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=80"
          alt="Velmora craftsmanship"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="flex items-center bg-velmora-sand px-8 md:px-16 py-16 md:py-20">
        <div className="max-w-md">
          <span className="font-sans text-xs tracking-wider uppercase text-velmora-muted">
            Our Story
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-deep tracking-widetitle font-semibold mt-4 leading-tight">
            Designed for the<br />Modern Woman
          </h2>
          <p className="font-sans text-sm text-velmora-muted mt-6 leading-relaxed">
            Velmora was born from a simple belief: luxury should feel effortless. Each piece is
            crafted from 18K gold-plated brass, designed in-house, and made for real life —
            from morning coffee to evening celebrations.
          </p>
          <p className="font-sans text-sm text-velmora-muted mt-4 leading-relaxed">
            We work directly with artisan workshops, cutting out the traditional markup so you
            get demi-fine quality at a fair price.
          </p>
          <div className="mt-8">
            <Link to="/about" className="btn-outline">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
