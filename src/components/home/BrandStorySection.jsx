import { Link } from 'react-router-dom';

export default function BrandStorySection() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image side */}
          <div className="aspect-[4/5] overflow-hidden bg-warm-beige/30">
            <img
              src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80"
              alt="Velmora Fine Jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text side */}
          <div className="max-w-lg">
            <p className="font-sans text-[11px] uppercase tracking-widest text-gold font-medium">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-warm-black mt-4 leading-tight">
              Fine Jewelry,<br />Thoughtfully Made
            </h2>
            <div className="w-10 h-px bg-gold mt-6" />
            <p className="font-sans text-sm text-warm-gray mt-6 leading-relaxed">
              At Velmora, we believe that fine jewelry should be both beautiful and
              attainable. Each piece is crafted from 18K gold-plated materials with
              meticulous attention to detail — designed to be worn every day and
              treasured for a lifetime.
            </p>
            <p className="font-sans text-sm text-warm-gray mt-4 leading-relaxed">
              From our workshop to your doorstep, we prioritize ethical sourcing,
              sustainable practices, and the kind of quality that speaks for itself.
              No logos, no loud branding — just pure, quiet elegance.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 font-sans text-xs uppercase tracking-widest text-gold hover:text-gold-hover border-b border-gold pb-0.5 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}