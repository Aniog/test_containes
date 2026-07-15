import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-[var(--velmora-bg-secondary)] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-text] [our-story-title] [velmora-jewelry-craftsmanship]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8 lg:pl-12">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-accent)] mb-4">Our Philosophy</p>
            <h2 id="our-story-title" className="velmora-heading text-3xl sm:text-4xl md:text-5xl mb-6">
              Where Craft Meets Care
            </h2>
            <div className="velmora-divider-thin w-12 mb-6" />
            <p id="brand-story-text" className="text-[var(--velmora-text-muted)] leading-relaxed mb-6">
              Every Velmora piece begins as a sketch, shaped by hands that understand the weight of a well-made thing. We believe jewelry should feel like a second skin — light enough to forget, beautiful enough to remember.
            </p>
            <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-8">
              Our demi-fine collection uses 18K gold plating over brass, chosen for its warmth, durability, and accessibility. Each piece is hypoallergenic, designed for sensitive skin, and crafted to withstand the rhythm of daily life.
            </p>
            <Link to="/about" className="velmora-btn-outline">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
