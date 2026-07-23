import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-ivory-alt overflow-hidden">
            <img
              alt="Velmora craftsmanship"
              data-strk-img-id="brand-story-img-5a6b7c"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center max-w-md">
            <p className="text-xs uppercase tracking-[0.2em] text-gold font-medium mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-[#1A1A1A] mb-6 tracking-wide"
            >
              Where Craft<br />Meets Modernity
            </h2>
            <p
              id="brand-story-text"
              className="text-sm text-[#6B6560] leading-relaxed mb-8 font-light"
            >
              Velmora was born from the belief that fine jewelry should feel personal, not precious. We work directly with artisan workshops to craft 18K gold-plated pieces that rival heirloom quality — without the heirloom markup. Every piece is designed to be lived in, layered, and loved for years.
            </p>
            <Link to="/shop" className="btn-outline-gold inline-block w-fit text-xs">
              Explore Our Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
