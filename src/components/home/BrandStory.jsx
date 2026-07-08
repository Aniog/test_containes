import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-32 bg-velmora-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-velmora-gold/30 hidden lg:block" />
          </div>

          {/* Content */}
          <div>
            <span className="font-sans text-xs tracking-widest text-velmora-gold uppercase">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mt-4 mb-6">
              Jewelry with Purpose
            </h2>
            <div className="space-y-4 text-velmora-charcoal/80">
              <p className="font-sans text-base leading-relaxed">
                At Velmora, we believe that jewelry should be more than an accessory—it should be a cherished part of your story. Each piece is thoughtfully designed to bring joy and confidence to your everyday moments.
              </p>
              <p className="font-sans text-base leading-relaxed">
                Our demi-fine collection bridges the gap between luxury and accessibility, offering premium quality at a price that feels approachable. We use only the finest materials: 18K gold plating, genuine gemstones, and ethically sourced crystals.
              </p>
              <p className="font-sans text-base leading-relaxed">
                Every design starts with a sketch and ends with a piece that feels like it was made just for you. We take pride in the details—the delicate filigree, the perfect weight, the way light catches each facet.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-8 btn-outline"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}