import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
                alt="Velmora craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Accent */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold/10 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div className="animate-fade-in stagger-2">
            <span className="text-gold text-sm uppercase tracking-ultrawide mb-4 block">
              Our Story
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-warm-black mb-6 leading-tight">
              Jewelry That Tells Your Story
            </h2>
            
            <div className="space-y-4 text-warm-gray leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves to wear 
                beautiful, well-crafted jewelry without the luxury markup.
              </p>
              <p>
                We partner with skilled artisans who share our commitment to quality, 
                using ethically sourced materials and time-honored techniques to create 
                pieces that feel truly special.
              </p>
              <p>
                Each design begins as a sketch, evolves through countless iterations, 
                and is only released when we know it'll become a treasured part of your 
                everyday story.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-charcoal hover:text-gold transition-colors group"
            >
              <span className="font-medium">Read Our Story</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
