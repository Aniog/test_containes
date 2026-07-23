import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24 bg-velmora-sand">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-velmora-charcoal overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:pl-8">
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-6">
              Our Story
            </h2>
            <div className="hairline-divider max-w-16 mb-6" />
            <p className="font-sans text-velmora-muted leading-relaxed mb-6">
              Founded with a passion for timeless elegance, Velmora Fine Jewelry represents 
              the perfect balance between luxury and accessibility. Each piece is thoughtfully 
              designed and crafted using only the finest materials, ensuring that our jewelry 
              becomes a treasured part of your story.
            </p>
            <p className="font-sans text-velmora-muted leading-relaxed mb-8">
              We believe that beautiful jewelry should be within reach. Our demi-fine collection 
              offers the look and feel of fine jewelry at an accessible price point, without 
              compromising on quality or craftsmanship.
            </p>
            <Link
              to="/about"
              className="inline-block font-sans text-sm text-velmora-charcoal border-b border-velmora-gold pb-1 hover:text-velmora-gold transition-colors"
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