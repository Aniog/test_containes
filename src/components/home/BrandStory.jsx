import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              data-strk-img-id="brand-story-main"
              data-strk-img="[story-title] [story-text] gold jewelry artisan craft workshop"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <span className="text-xs tracking-[0.2em] uppercase text-accent mb-4 font-medium">
              Our Story
            </span>
            <h2
              id="story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-fg mb-6 leading-[1.15]"
            >
              Luxury should feel like coming home
            </h2>
            <p
              id="story-text"
              className="text-muted-fg leading-relaxed mb-4 text-sm md:text-base"
            >
              Velmora was born from a simple belief: you shouldn't have to choose between quality and accessibility. Every piece in our collection is crafted from 18K gold-plated sterling silver — designed to last, priced to collect.
            </p>
            <p className="text-muted-fg leading-relaxed mb-8 text-sm md:text-base">
              We work directly with artisan workshops, cutting out the traditional retail markup to bring you demi-fine jewelry that feels premium without the premium price tag. Each piece arrives in our signature gift box — because you deserve to feel treasured, whether you're gifting or self-gifting.
            </p>
            <Link
              to="/shop"
              className="self-start border border-accent text-accent px-8 py-3 text-xs font-medium tracking-[0.15em] uppercase hover:bg-accent hover:text-accent-fg transition-colors duration-300"
            >
              Our Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
