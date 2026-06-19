import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 sm:py-24 bg-warm-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold-400 hidden lg:block" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-xs tracking-ultra-wide uppercase text-gold-600 mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-800 mb-6 leading-tight">
              Jewelry that tells<br />
              <span className="italic text-gold-600">your story</span>
            </h2>
            <div className="space-y-4 text-charcoal-600 leading-relaxed">
              <p>
                Founded in 2019, Velmora began with a simple belief: luxury 
                should be accessible. We craft demi-fine jewelry that combines 
                the quality of fine jewelry with the accessibility of fashion pieces.
              </p>
              <p>
                Each piece is thoughtfully designed in our Los Angeles studio 
                and crafted by skilled artisans using premium materials — 18K 
                gold plating, hypoallergenic metals, and ethically sourced stones.
              </p>
              <p>
                Our name, Velmora, means "beloved" in Swedish. Every piece we 
                create is meant to become a treasured part of your personal story.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm tracking-wider uppercase text-charcoal-700 hover:text-gold-600 border-b border-charcoal-300 hover:border-gold-600 pb-1 transition-colors"
            >
              Discover Our Journey
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}