import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-20 md:py-28 bg-velmora-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-velmora-accent" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-xs tracking-widest uppercase text-velmora-accent mb-4 block">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-text-primary mb-6 leading-tight">
              Where Elegance Meets <br />
              <span className="italic">Intentional Design</span>
            </h2>
            
            <div className="space-y-4 text-velmora-text-secondary leading-relaxed">
              <p>
                Velmora was born from a simple belief: beautiful jewelry should be accessible, 
                ethical, and made to last. Every piece in our collection is thoughtfully designed 
                to become a treasured part of your story.
              </p>
              <p>
                We partner with certified workshops that share our commitment to fair wages, 
                safe conditions, and environmental responsibility. Our demi-fine pieces feature 
                premium materials — 18K gold plating, cubic zirconia, and hypoallergenic metals — 
                so you can wear your jewelry with confidence every day.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 group"
            >
              <span className="text-sm tracking-widest uppercase font-medium">
                Discover Our Journey
              </span>
              <ArrowRight className="w-4 h-4 text-velmora-accent transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
