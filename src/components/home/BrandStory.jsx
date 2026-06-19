import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 lg:py-24 bg-ink-900 text-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515562141589-94aa5e5b0fc4?w=800&q=85"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <p className="text-gold-400 text-xs tracking-widest uppercase font-medium mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cream-50 font-light leading-tight mb-6">
              Jewelry that feels
              <span className="block italic font-medium">uniquely yours</span>
            </h2>
            <p className="text-cream-300 text-sm leading-relaxed mb-6">
              Velmora was born from a belief that fine jewelry shouldn&rsquo;t be reserved for
              special occasions. We craft demi-fine pieces that bridge the gap between
              everyday elegance and heirloom quality — using 18K gold plating,
              ethically sourced materials, and a deep respect for the art of adornment.
            </p>
            <p className="text-cream-300 text-sm leading-relaxed mb-8">
              Every piece is designed in-house, finished by hand, and arrives in packaging
              made from recycled materials — because beauty should extend beyond the jewel itself.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase font-medium text-gold-400 border-b border-gold-400/30 pb-0.5 hover:text-gold-300 transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}