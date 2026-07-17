import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { storyImage } from '@/data/products';

export function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-stone-200 overflow-hidden">
            <img 
              src={storyImage}
              alt="Craftsmanship at Velmora"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:pl-8">
            <span className="font-sans text-xs uppercase tracking-widest text-gold">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-h2 text-charcoal mt-4 leading-tight">
              Jewelry Designed to Be Treasured
            </h2>
            <div className="mt-6 space-y-4">
              <p className="font-sans text-stone-600 leading-relaxed">
                At Velmora, we believe that beautiful jewelry should be accessible to everyone. 
                Our journey began with a simple vision: to create pieces that blend timeless elegance 
                with modern sensibility.
              </p>
              <p className="font-sans text-stone-600 leading-relaxed">
                Each piece in our collection is thoughtfully designed using premium materials, 
                including 18K gold plating and hypoallergenic metals. We believe in jewelry that 
                doesn't just look beautiful—it feels meaningful.
              </p>
            </div>
            <Link 
              to="/about"
              className="inline-flex items-center gap-2 mt-8 font-sans text-sm uppercase tracking-widest text-charcoal hover:text-gold transition-colors group"
            >
              Learn More
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}