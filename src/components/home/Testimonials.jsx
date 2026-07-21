import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';
import { useIntersectionObserver } from '@/hooks/useScrollPosition';

export function Testimonials() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section ref={ref} className="section-padding bg-ivory">
      <div className="container-wide">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Reviews</p>
          <h2 className="section-title">What Our Customers Say</h2>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-cream p-8 rounded-lg transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-stone leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="font-serif text-warmblack">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="font-medium text-sm text-warmblack">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
