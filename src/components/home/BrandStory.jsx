import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=1000&fit=crop"
              alt="Velmora artisan crafting gold jewelry"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal leading-tight">
              Where Craft Meets Intention
            </h2>
            <div className="w-12 h-px bg-gold my-6" />
            <p className="font-sans text-sm md:text-base text-warm-gray leading-relaxed mb-4">
              Velmora was born from a simple belief: that every woman deserves jewelry that feels as special as she is. We create demi-fine pieces using 18K gold plating over carefully sourced base metals — delivering the warmth and glow of solid gold at a fraction of the price.
            </p>
            <p className="font-sans text-sm md:text-base text-warm-gray leading-relaxed mb-8">
              Each piece is designed in our studio, hand-finished by skilled artisans, and tested for hypoallergenic safety. We believe in quiet luxury — jewelry that whispers, never shouts.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.15em] font-semibold text-charcoal border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors w-fit"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
