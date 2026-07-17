import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-32 bg-velmora-sand/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-velmora-gold/30" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-velmora-gold/10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-xs tracking-widest text-velmora-taupe uppercase">Our Story</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-velmora-charcoal">
              Crafted with Intention
            </h2>
            <div className="w-16 h-px bg-velmora-gold mt-6 mb-8" />
            
            <p className="text-velmora-charcoal/70 leading-relaxed">
              At Velmora, we believe jewelry should be more than an accessory—it should be a cherished part of your story. Each piece is thoughtfully designed in our studio, drawing inspiration from the quiet moments of beauty in everyday life.
            </p>
            <p className="mt-4 text-velmora-charcoal/70 leading-relaxed">
              Our demi-fine collections feature premium materials—18K gold plating, sterling silver, and carefully selected gemstones—crafted to last and to be worn with joy for years to come.
            </p>
            <p className="mt-4 text-velmora-charcoal/70 leading-relaxed">
              We believe in quiet luxury: pieces that feel special without being ostentatious, quality that speaks for itself.
            </p>

            <Link 
              to="/about"
              className="inline-block mt-8 text-sm tracking-widest text-velmora-gold hover:text-velmora-goldDark transition-colors border-b border-velmora-gold/30 hover:border-velmora-gold pb-1"
            >
              LEARN MORE ABOUT US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}