import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-20 md:py-28 bg-charcoal">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative Frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 -z-10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-gold text-xs uppercase tracking-widest mb-4 block">
              Our Story
            </span>
            <h2 className="font-serif text-ivory text-section-mobile md:text-section mb-6">
              Jewelry with Purpose
            </h2>
            <div className="space-y-4 text-warm-gray leading-relaxed">
              <p>
                At Velmora, we believe jewelry should be more than an accessory—it should be a cherished part of your story. Founded with a passion for quiet luxury, we create pieces that transcend trends and stand the test of time.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed using premium materials, including 18K gold plating and ethically sourced crystals. We believe in jewelry that feels as good as it looks—hypoallergenic, comfortable, and made to be worn every day.
              </p>
              <p>
                Our commitment to quality extends beyond our products to every touchpoint of your experience, from sustainable packaging to exceptional customer service.
              </p>
            </div>
            <Link 
              to="/about"
              className="inline-block mt-8 text-gold hover:text-ivory transition-colors text-sm uppercase tracking-widest border-b border-gold hover:border-ivory pb-1"
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