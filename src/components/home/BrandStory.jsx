import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-velvet-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image side */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1000&auto=format&fit=crop"
              alt="Artisan jewelry crafting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text side */}
          <div className="max-w-md">
            <p className="text-gold text-xs tracking-[0.2em] uppercase mb-3">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velvet-900 font-light leading-tight">
              Jewelry that feels<br />
              <span className="italic">like home</span>
            </h2>
            <div className="w-12 h-px bg-gold/40 my-6" />
            <p className="text-velvet-600 leading-relaxed text-sm md:text-base">
              Velmora was born from a simple belief: fine jewelry shouldn't be reserved for special occasions. 
              Every piece we create is designed to be worn daily — from morning coffee to evening cocktails. 
              We partner with master artisans who share our commitment to quality, using ethically sourced 
              materials and 18K gold plating that lasts.
            </p>
            <p className="text-velvet-600 leading-relaxed text-sm md:text-base mt-4">
              No markups, no middlemen. Just beautiful, accessible jewelry crafted with intention.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 border-b border-velvet-900 text-velvet-900 text-sm tracking-[0.15em] uppercase pb-1 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}