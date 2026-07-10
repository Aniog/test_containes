import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-velmora-sand/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-velmora-gold/30 hidden md:block" />
          </div>

          {/* Content */}
          <div className="md:pl-8">
            <span className="text-xs uppercase tracking-widest text-velmora-taupe">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mt-4 mb-6">
              Crafted with Intention
            </h2>
            <div className="hairline mb-6" style={{ maxWidth: '60px' }} />
            <p className="text-velmora-taupe leading-relaxed mb-6">
              At Velmora, we believe jewelry should be more than an accessory—it should be a 
              treasured part of your story. Each piece is thoughtfully designed in our studio, 
              drawing inspiration from the quiet moments of beauty in everyday life.
            </p>
            <p className="text-velmora-taupe leading-relaxed mb-8">
              Our demi-fine collections feature premium materials—18K gold plating, genuine 
              crystals, and ethically sourced gemstones—crafted to last and to be loved for 
              generations.
            </p>
            <Link
              to="/about"
              className="inline-block border-b border-velmora-charcoal pb-1 text-sm uppercase tracking-widest text-velmora-charcoal hover:text-velmora-gold hover:border-velmora-gold transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}