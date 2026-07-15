import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="section-padding bg-cream overflow-hidden">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-up">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80"
                alt="Velmora jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold rounded-full hidden lg:block" />
          </div>

          {/* Content */}
          <div className="lg:pl-8 animate-fade-up" style={{ animationDelay: '150ms' }}>
            <span className="text-xs tracking-[0.2em] text-gold uppercase font-sans">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso mt-4 mb-6 leading-tight">
              Where Artistry Meets Everyday Luxury
            </h2>
            
            <div className="space-y-4 text-taupe leading-relaxed">
              <p>
                At Velmora, we believe jewelry should be more than an accessory—it should be a reflection of who you are. Founded in 2019, we set out to create demi-fine pieces that bridge the gap between fashion and fine jewelry.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed and crafted with care, using quality materials like 18K gold plating and hypoallergenic metals. We believe luxury should be accessible, worn daily, and gifted with joy.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-dark transition-colors mt-8 group"
            >
              <span className="font-medium">Discover Our Journey</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
