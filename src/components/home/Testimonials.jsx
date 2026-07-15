import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';
import { cn } from '@/lib/utils';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-espresso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block font-sans text-sm tracking-widest text-gold uppercase mb-3">
            Reviews
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-4">
            Loved by Thousands
          </h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                'bg-charcoal/30 rounded-xl p-6 md:p-8',
                'border border-ivory/10',
                'transition-all duration-300 hover:border-gold/30',
                'animate-fadeIn'
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-gold fill-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-sans text-ivory/80 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="font-serif text-gold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-sans text-sm text-ivory font-medium">
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-xs text-ivory/50">
                    Verified Purchase
                  </p>
                </div>
              </div>

              {/* Product reference */}
              <p className="font-sans text-xs text-gold/70 mt-4 pt-4 border-t border-ivory/10">
                Purchased: {testimonial.product}
              </p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-center">
          <div>
            <p className="font-serif text-3xl text-gold mb-1">4.9</p>
            <p className="font-sans text-xs text-ivory/50 uppercase tracking-wide">Average Rating</p>
          </div>
          <div className="w-px h-12 bg-ivory/20" />
          <div>
            <p className="font-serif text-3xl text-gold mb-1">50K+</p>
            <p className="font-sans text-xs text-ivory/50 uppercase tracking-wide">Happy Customers</p>
          </div>
          <div className="w-px h-12 bg-ivory/20" />
          <div>
            <p className="font-serif text-3xl text-gold mb-1">15K+</p>
            <p className="font-sans text-xs text-ivory/50 uppercase tracking-wide">Five Star Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
