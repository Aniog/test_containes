import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="bg-velmora-cream">
      <div className="container-site">
        <div className="grid md:grid-cols-2 gap-0 items-center">
          {/* Image side */}
          <div className="aspect-[4/5] md:aspect-auto md:h-[600px] bg-gradient-to-br from-velmora-goldlight/30 via-velmora-stone/30 to-velmora-sand flex items-center justify-center">
            <span className="font-serif text-velmora-warmgray/25 text-lg italic">Brand imagery</span>
          </div>

          {/* Text side */}
          <div className="py-16 md:py-0 md:pl-16 lg:pl-24">
            <span className="text-xs tracking-widest uppercase text-velmora-warmgray mb-4 block">Our Story</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-charcoal mb-6 leading-tight">
              Jewelry that lives<br />in your story
            </h2>
            <p className="text-velmora-warmgray leading-relaxed mb-4 max-w-md">
              Velmora was born from the belief that fine jewelry shouldn't be reserved for special occasions. Each piece is designed in our London atelier, crafted from 18K gold-plated brass with an obsessive attention to detail.
            </p>
            <p className="text-velmora-warmgray leading-relaxed mb-8 max-w-md">
              We work directly with artisans to create demi-fine pieces that feel both timeless and refreshingly modern — accessible luxury you'll reach for every single day.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase text-velmora-gold hover:text-velmora-golddark transition-colors group"
            >
              Learn More
              <span className="block w-8 h-px bg-velmora-gold group-hover:w-12 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
