import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="section-padding bg-velmora-cream">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-velmora-light-gray overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:pl-8">
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-6">
              Our Story
            </h2>
            <div className="w-12 h-px bg-velmora-gold mb-6" />
            <p className="text-velmora-warm-gray leading-relaxed mb-4">
              Founded with a passion for creating jewelry that transcends trends, 
              Velmora represents the intersection of timeless elegance and modern sensibility. 
              Each piece is thoughtfully designed to become a cherished part of your personal story.
            </p>
            <p className="text-velmora-warm-gray leading-relaxed mb-6">
              Our demi-fine collections feature premium materials—18K gold plating, 
              sterling silver, and carefully selected gemstones—crafted with the same 
              attention to detail as fine jewelry, at accessible price points.
            </p>
            <Link
              to="/about"
              className="inline-block border-b border-velmora-charcoal pb-1 text-sm uppercase tracking-widest hover:text-velmora-gold hover:border-velmora-gold transition-colors"
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