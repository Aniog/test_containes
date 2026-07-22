import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/5] bg-velmora-sand overflow-hidden">
          <img
            alt="Velmora craftsmanship"
            data-strk-img-id="brand-story-img-6fh7"
            data-strk-img={`[brand-story-desc] [brand-story-title]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
          />
        </div>

        {/* Text */}
        <div className="md:pl-4">
          <p className="text-xs tracking-widest uppercase text-velmora-gold font-medium mb-4">
            Our Story
          </p>
          <h2 id="brand-story-title" className="section-title">
            Jewelry That Tells Your Story
          </h2>
          <p id="brand-story-desc" className="mt-6 text-velmora-muted leading-relaxed max-w-md font-light">
            Velmora was born from the belief that fine jewelry shouldn't be reserved for special occasions. 
            Each piece is crafted in small batches using 18K gold plating over brass, designed to become 
            part of your everyday uniform — a quiet luxury that moves with you through life's most meaningful moments.
          </p>
          <p className="mt-4 text-velmora-muted leading-relaxed max-w-md font-light">
            From our responsibly sourced materials to our recyclable packaging, every detail reflects our 
            commitment to beauty that does no harm.
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
