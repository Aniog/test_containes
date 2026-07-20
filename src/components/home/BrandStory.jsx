import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-section-mobile lg:py-section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-xs uppercase tracking-[0.2em] text-gold">Our Story</span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mt-4 leading-tight">
              Jewelry Crafted with Intention
            </h2>
            <p className="mt-6 text-taupe leading-relaxed">
              At Velmora, we believe jewelry should be more than an accessory—it should be a cherished part of your story. Each piece is thoughtfully designed with premium materials, crafted to last and meant to be worn every day.
            </p>
            <p className="mt-4 text-taupe leading-relaxed">
              Our commitment to quiet luxury means we focus on the details that matter: the weight of gold against your skin, the way light catches a carefully placed crystal, the feeling of slipping on a piece that feels like it was made just for you.
            </p>
            <Link 
              to="/about"
              className="inline-block mt-8 border-b border-charcoal text-charcoal text-sm uppercase tracking-[0.1em] pb-1 hover:text-gold hover:border-gold transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;