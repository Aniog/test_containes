import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function BrandStory() {
  return (
    <section className="py-16 lg:py-24 bg-card-bg">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1200&q=80"
              alt="Jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <h2 className="font-serif text-3xl md:text-4xl text-primary animate-fade-in">
              Our Story
            </h2>
            <div className="mt-6 space-y-4 text-secondary leading-relaxed animate-fade-in delay-100">
              <p>
                Founded with a passion for creating jewelry that feels like a natural extension of the woman who wears it, Velmora represents the intersection of timeless elegance and modern sensibility.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed using quality materials including 18K gold plating, ensuring that our jewelry remains beautiful for years to come. We believe in jewelry that doesn't just accessorize, but becomes a treasured part of your personal story.
              </p>
              <p>
                Our commitment to accessible luxury means you don't have to choose between quality and price. Every Velmora piece is crafted to be worn and treasured, from everyday essentials to statement pieces for special moments.
              </p>
            </div>
            <Link 
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm tracking-wide hover:text-accent transition-colors group animate-fade-in delay-200"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandStory;