const BrandStory = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-brand-warm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden bg-brand-ivory">
            <img
              data-strk-img-id="brand-story-img-f8g9h0"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4">
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-charcoal font-light leading-tight">
              Jewelry That Tells Your Story
            </h2>
            <p id="brand-story-desc" className="mt-6 text-brand-muted font-sans text-sm md:text-base leading-relaxed">
              At Velmora, we believe luxury should be accessible. Each piece is thoughtfully designed in our studio, 
              crafted with 18K gold plating over hypoallergenic metals, and finished by hand. We create jewelry 
              for the moments that matter — from everyday confidence to milestone celebrations.
            </p>
            <p className="mt-4 text-brand-muted font-sans text-sm md:text-base leading-relaxed">
              Our commitment to quality means every piece is built to last, with materials that are kind to 
              sensitive skin and finishes that maintain their warmth over time.
            </p>
            <a
              href="#"
              className="inline-block mt-8 text-sm font-sans tracking-wider uppercase text-brand-charcoal border-b border-brand-charcoal pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors duration-300"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
