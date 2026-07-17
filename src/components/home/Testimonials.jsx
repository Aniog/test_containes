import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs uppercase tracking-ultra-wide text-taupe mb-3">
            What Our Customers Say
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            Loved by Thousands
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-ivory p-8 lg:p-10 stagger-item"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-gold-400 fill-gold-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-charcoal/80 leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center text-sm font-medium text-taupe">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-charcoal">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-taupe">
                    {testimonial.product}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
