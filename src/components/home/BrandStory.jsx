import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function BrandStory() {
  return (
    <section className="py-20 lg:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold hidden lg:block" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-xs font-medium tracking-button uppercase text-gold mb-4 block">
              Our Story
            </span>
            <h2 
              className="heading-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Where Craft Meets Heart
            </h2>
            <div className="space-y-4 text-warm-gray leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without the extraordinary price tag.
              </p>
              <p>
                We partner with skilled artisans who share our passion for quality and attention to detail. Each piece is thoughtfully designed, carefully crafted, and finished with 18K gold plating that lasts.
              </p>
              <p>
                Our jewelry isn't about following trends—it's about creating pieces you'll treasure for years to come, pieces that mark life's beautiful moments.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-button text-gold hover:text-gold-dark transition-colors group"
            >
              <span>Discover Our Journey</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
