import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStorySection() {
  return (
    <section className="py-20 lg:py-28 bg-ivory-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative Frame */}
            <div className="absolute top-8 left-8 right-8 bottom-8 border border-gold-400/30 pointer-events-none" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-xs tracking-extra-wide uppercase text-gold-600 mb-4 block">
              Our Story
            </span>
            <h2 className="section-title mb-6">
              Jewelry That Tells
              <br />
              <span className="italic">Your Story</span>
            </h2>
            <div className="space-y-4 text-charcoal-600 leading-relaxed mb-8">
              <p>
                Velmora was born from a simple belief: every woman deserves to wear 
                jewelry that makes her feel extraordinary — without the extraordinary price tag.
              </p>
              <p>
                Founded in 2019, we craft each piece with the same care and attention to detail 
                as fine jewelry houses, using premium materials like 18K gold plating and 
                hypoallergenic metals.
              </p>
              <p>
                Our designs blend timeless elegance with modern sensibility, creating pieces that 
                become treasured companions on life's most memorable moments.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm tracking-extra-wide uppercase text-warmblack border-b border-warmblack pb-1 hover:border-gold-500 hover:text-gold-600 transition-colors group"
            >
              Discover Our Journey
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
