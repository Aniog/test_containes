import { Link } from "react-router-dom";

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1515562141589-677acb0d1e4b?w=800&q=85"
              alt="Artisan jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Crafted with
              <br />
              <span className="italic font-medium">Intention</span>
            </h2>
            <div className="w-12 h-[1px] bg-gold mt-6 mb-6" />
            <p className="text-muted leading-relaxed text-sm md:text-base">
              At Velmora, we believe fine jewelry should feel both precious and personal. 
              Every piece is designed in our atelier and crafted with 18K gold plating 
              over premium brass — creating heirloom-quality treasures that remain 
              beautifully accessible.
            </p>
            <p className="text-muted leading-relaxed text-sm md:text-base mt-4">
              From our hands to yours, each piece arrives in a thoughtfully designed 
              pouch, ready to be worn, gifted, and treasured for years to come.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm tracking-widest uppercase text-gold hover:text-gold-hover transition-colors group"
            >
              <span>Our Story</span>
              <span className="w-8 h-[1px] bg-gold group-hover:w-12 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}