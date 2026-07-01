import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-section-mobile md:py-section bg-velmora-bg-secondary">
      <div className="max-w-container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-text-primary">
              Our Story
            </h2>
            <div className="w-12 h-px bg-velmora-accent" />
            <p className="text-velmora-text-secondary leading-relaxed">
              Founded with a passion for quiet luxury, Velmora creates jewelry that speaks to the soul. 
              Each piece is thoughtfully designed to transcend trends, becoming cherished additions to 
              your personal collection.
            </p>
            <p className="text-velmora-text-secondary leading-relaxed">
              Our demi-fine collections blend premium materials with accessible elegance, crafted for 
              women who appreciate the finer details. From our studio to your jewelry box, we believe 
              in jewelry that tells a story — yours.
            </p>
            <Link 
              to="/about"
              className="inline-block text-velmora-accent text-sm tracking-wider uppercase border-b border-velmora-accent pb-1 hover:text-velmora-accent-hover transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}