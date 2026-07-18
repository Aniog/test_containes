import { Link } from 'react-router-dom';

export default function BrandStory() {
  const imgId = 'brand-img-story';
  const titleId = 'brand-title-story';
  const bodyId = 'brand-body-story';

  return (
    <section className="bg-velmora-cream">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 min-h-[500px] md:min-h-[600px]">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto">
          <img
            data-strk-img-id={imgId}
            data-strk-img={`[${bodyId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex items-center px-8 md:px-16 lg:px-20 py-14 md:py-0">
          <div className="max-w-md">
            <p id={titleId} className="text-[11px] tracking-[0.2em] uppercase text-velmora-muted mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-velmora-black leading-tight text-balance">
              Jewelry That Lives<br />With You
            </h2>
            <div className="w-12 h-px bg-velmora-gold/60 mt-6 mb-6" />
            <p id={bodyId} className="text-sm md:text-base text-velmora-muted leading-relaxed">
              We believe fine jewelry shouldn't be reserved for special occasions. Velmora was founded to create
              demi-fine pieces — crafted from 18K gold plating on recycled brass — that you'll reach for every
              morning. Ethically made, designed in Paris, and priced for real life.
            </p>
            <Link
              to="#"
              className="inline-block mt-6 text-xs tracking-[0.2em] uppercase text-velmora-gold border-b border-velmora-gold pb-1 hover:text-velmora-gold-dark hover:border-velmora-gold-dark transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
