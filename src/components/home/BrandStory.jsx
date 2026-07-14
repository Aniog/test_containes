import { Link } from 'react-router-dom';
import { StoryPlaceholder } from '../ui/ProductImagePlaceholder';
import { ArrowRight } from 'lucide-react';

export function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-warm-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden order-2 lg:order-1">
            <StoryPlaceholder className="absolute inset-0 w-full h-full" />
            
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-champagne opacity-30" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-champagne text-xs tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-gray-900 mb-6 leading-tight">
              Where Craft Meets<br />
              <span className="italic">Intention</span>
            </h2>
            
            <div className="space-y-4 text-warm-gray-600 leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry 
                that feels special without the special-occasion price tag.
              </p>
              <p>
                Founded in New York City, we work with master artisans who share 
                our commitment to quality. Each piece is hand-finished, ensuring 
                the attention to detail that transforms jewelry into heirlooms.
              </p>
              <p>
                Our demi-fine collections bridge the gap between fashion and fine 
                jewelry — accessible luxury that moves with you from morning coffee 
                to evening cocktails.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium tracking-wider uppercase text-warm-gray-900 hover:text-champagne transition-colors group"
            >
              <span>Discover Our Journey</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandStory;
