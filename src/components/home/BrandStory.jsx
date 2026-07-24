import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-warm-100 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&q=85"
              alt="Artisan jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <p className="text-gold-300 text-xs uppercase tracking-[0.25em] mb-4 font-sans">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-warm-900 leading-tight mb-6">
              Jewelry That
              <br />
              <span className="italic">Tells a Story</span>
            </h2>
            <div className="space-y-4 text-warm-600 text-sm leading-relaxed">
              <p>
                Velmora was born from a belief that fine jewelry should be accessible without compromise. 
                Each piece is crafted with care in our atelier using 18K gold plating over sterling silver 
                — a commitment to quality that lasts.
              </p>
              <p>
                We partner with skilled artisans who share our obsession with detail. Every curve, 
                every clasp, every facet is considered. The result is jewelry that feels as beautiful 
                as it looks — pieces you'll reach for every day.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-gold-300 text-sm uppercase tracking-widest mt-8 hover:text-gold-400 transition-colors font-sans"
            >
              Read More
              <span className="text-lg">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}