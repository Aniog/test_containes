import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-warm-white)]">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden bg-[var(--color-ivory)]">
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:pl-8">
            <h2 className="font-serif text-3xl md:text-4xl" style={{ color: 'var(--color-charcoal)' }}>
              Our Story
            </h2>
            <div className="hairline my-6" />
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-muted)' }}>
              Founded with a vision to make demi-fine jewelry accessible to the modern woman, 
              Velmora represents the perfect balance of quality and affordability. Each piece is 
              thoughtfully designed in our studio and crafted with care using only the finest materials.
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-muted)' }}>
              We believe that beautiful jewelry should be worn and treasured every day, not saved 
              for special occasions. Our collection is designed to become part of your personal story, 
              accompanying you through life's moments big and small.
            </p>
            <Link
              to="/about"
              className="btn-outline"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;