import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          {/* Image side */}
          <div className="aspect-[4/5] lg:aspect-auto lg:h-full overflow-hidden">
            <img
              src="https://picsum.photos/seed/jewelry-craft/1000/1200"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text side */}
          <div className="flex items-center px-6 md:px-16 py-16 lg:py-0">
            <div className="max-w-md">
              <span className="text-[11px] uppercase tracking-[0.25em] text-stone font-medium">Our Story</span>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mt-4 font-light leading-tight">
                Jewelry That<br />
                <span className="italic">Stays With You</span>
              </h2>
              <div className="w-10 h-[1px] bg-gold/50 mt-6 mb-6" />
              <p className="text-stone text-sm md:text-base leading-relaxed">
                At Velmora, we believe fine jewelry shouldn't be reserved for special occasions alone.
                Every piece is designed to move through life with you — from morning coffee to evening
                celebrations. We craft each collection in small batches using 18K gold plating over
                sterling silver, ensuring heirloom quality at an accessible price.
              </p>
              <p className="text-stone text-sm md:text-base leading-relaxed mt-4">
                No excess. No compromise. Just beautiful, lasting jewelry that deserves to be worn
                every single day.
              </p>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="text-xs uppercase tracking-widest text-charcoal hover:text-gold transition-colors border-b border-charcoal/20 hover:border-gold pb-0.5"
                >
                  Read Our Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}