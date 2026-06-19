import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Velmora craftmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-accent text-xs tracking-widest uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
              Jewelry with
              <br />
              <span className="italic">intention</span>
            </h2>
            <div className="space-y-4 text-secondary leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves 
                to wear beautiful jewelry without compromise. We craft demi-fine 
                pieces that bridge the gap between fashion and fine jewelry.
              </p>
              <p>
                Each piece is designed in our studio and crafted with 
                18k gold plating over hypoallergenic materials. The result? 
                Stunning jewelry that feels luxurious and lasts.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-primary hover:text-accent transition-colors group"
            >
              <span className="tracking-wider uppercase">Read Our Story</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
