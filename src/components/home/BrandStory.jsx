import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24 bg-velmora-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-velmora-charcoal">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <span className="text-xs font-sans font-semibold tracking-widest uppercase text-velmora-gold-dark">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-velmora-black mt-3 mb-6 leading-tight">
              Jewelry with soul, designed for real life
            </h2>
            <div className="space-y-4 text-sm md:text-base text-velmora-muted leading-relaxed">
              <p>
                Velmora was born from a simple belief: fine jewelry should be accessible, meaningful, and made to be worn every day.
              </p>
              <p>
                Each piece is thoughtfully designed in our California studio, using ethically sourced materials and time-honored craftsmanship. We create jewelry that feels as good as it looks — lightweight, comfortable, and built to last.
              </p>
              <p>
                From our family to yours, every Velmora piece is crafted to be treasured.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm font-sans font-medium tracking-widest uppercase text-velmora-black hover:text-velmora-gold-dark transition-colors duration-300 group"
            >
              Read Our Story
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
