import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStorySection = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Jewelry crafting"
              className="w-full h-full object-cover"
            />
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-xs tracking-ultra-wide uppercase text-gold">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl mt-2 mb-6 leading-tight">
              Jewelry that tells your story
            </h2>
            <div className="space-y-4 text-warm-gray leading-relaxed">
              <p>
                At Velmora, we believe every woman deserves to feel special. Our pieces are 
                designed to mark life's precious moments — whether it's a gift for someone 
                you love or a treat for yourself.
              </p>
              <p>
                Founded in 2019, we set out to create demi-fine jewelry that bridges the 
                gap between fashion and fine jewelry. Each piece is crafted with care, 
                using 18K gold plating over sterling silver for durability and beauty.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm tracking-wider text-charcoal group"
            >
              <span className="relative">
                Discover Our Journey
                <span className="absolute -bottom-1 left-0 w-full h-px bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </span>
              <ArrowRight
                size={16}
                className="transform group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;
