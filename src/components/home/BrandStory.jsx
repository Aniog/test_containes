import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-48 md:h-48 border border-gold-400" />
          </div>

          {/* Content */}
          <div className="lg:pl-8 xl:pl-16">
            <span className="text-xs uppercase tracking-ultra-wide text-taupe mb-4 block">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso mb-6 leading-tight">
              Where Artistry Meets Everyday Luxury
            </h2>
            <div className="space-y-4 text-taupe leading-relaxed">
              <p>
                Velmora was born from a simple belief: that beautiful, quality jewelry shouldn't remain locked away for special occasions.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed to transition seamlessly from morning coffee to evening cocktails, from the office to weekend adventures.
              </p>
              <p>
                We partner with skilled artisans who share our commitment to excellence, using premium materials like 18K gold plating and hypoallergenic metals so you can wear your treasures with confidence every day.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center mt-8 text-xs uppercase tracking-ultra-wide text-espresso hover:text-gold-600 transition-colors group"
            >
              Discover Our Journey
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
