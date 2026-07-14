import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 lg:py-32 bg-velmora-sand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-velmora-gold/20 -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-xs tracking-ultra uppercase text-velmora-taupe">Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 text-velmora-charcoal">
              Crafted with Intention
            </h2>
            <div className="w-16 h-px bg-velmora-gold mt-6 mb-8" />
            <p className="text-velmora-charcoal/80 leading-relaxed mb-6">
              At Velmora, we believe jewelry is more than an accessory—it's a form of self-expression, 
              a memory keeper, and a daily reminder of your worth. Our pieces are designed to be 
              treasured for years to come.
            </p>
            <p className="text-velmora-charcoal/80 leading-relaxed mb-8">
              Each piece in our collection is crafted with intention, using only the finest materials 
              and attention to detail. We source ethically, design thoughtfully, and create pieces 
              that transcend trends.
            </p>
            <Link
              to="/about"
              className="inline-block px-8 py-3 border border-velmora-charcoal text-velmora-charcoal text-sm tracking-widest uppercase hover:bg-velmora-charcoal hover:text-velmora-cream transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}