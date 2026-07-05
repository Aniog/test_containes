import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-velmora-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-xs tracking-widest uppercase text-velmora-goldDark mb-4 block">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-6">
              Crafted with Intention, Worn with Love
            </h2>
            <div className="space-y-4 text-velmora-charcoal/70 leading-relaxed">
              <p>
                Velmora was born from a simple belief: jewelry should feel like an extension of yourself — elegant, effortless, and eternally versatile.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed in our studio and crafted using ethically sourced materials. We believe in quiet luxury — pieces that don't shout but certainly whisper sophistication.
              </p>
              <p>
                Our demi-fine jewelry bridges the gap between fine craftsmanship and everyday wearability, creating treasures meant to be cherished for generations.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm tracking-wider uppercase border-b border-velmora-charcoal/30 pb-1 hover:border-velmora-gold transition-colors duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}