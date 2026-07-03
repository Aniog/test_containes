import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop"
              alt="Velmora fine jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
              Jewelry That<br />Tells Your Story
            </h2>
            <div className="w-12 h-0.5 bg-gold-400 mt-6 mb-6" />
            <p className="text-sm text-warm-600 leading-relaxed font-sans">
              At Velmora, we believe fine jewelry shouldn't be reserved for once-in-a-lifetime occasions. 
              Every piece is crafted in 18K gold with meticulous attention to detail — designed to be 
              worn daily, layered freely, and passed down with love.
            </p>
            <p className="mt-4 text-sm text-warm-600 leading-relaxed font-sans">
              From our studio to your doorstep, we're redefining what accessible luxury means.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-xs tracking-wide-xl uppercase font-sans text-ink border-b border-ink pb-0.5 hover:text-gold-600 hover:border-gold-600 transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}