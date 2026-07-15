import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="bg-cream-100">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="aspect-[4/5] lg:aspect-auto bg-cream-300 overflow-hidden">
            <img
              alt="Velmora craftsmanship"
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-title] velmora jewelry craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex items-center px-8 lg:px-16 py-16 lg:py-24">
            <div className="max-w-md">
              <p className="text-[10px] tracking-[0.3em] uppercase text-warm-400 mb-4">
                Our Story
              </p>
              <h2
                id="brand-story-title"
                className="font-serif text-3xl md:text-4xl font-medium leading-[1.15] mb-6 text-balance"
              >
                Jewelry that lives with you — not just on you
              </h2>
              <p className="text-sm text-warm-500 leading-relaxed mb-8">
                Velmora was born from the belief that fine jewelry shouldn't be reserved for special
                occasions. Each piece is crafted in 18K gold plate with the intention of becoming
                part of your daily rhythm — the huggies you sleep in, the necklace that never comes off,
                the earrings that feel like a second skin.
              </p>
              <Link to="/about" className="btn-outline text-xs">
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}