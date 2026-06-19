import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-cream-50 p-8 sm:p-10 text-center">
      {/* Stars */}
      <div className="flex items-center justify-center gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-gold-400 text-gold-400"
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="font-serif text-xl sm:text-2xl text-charcoal-700 italic leading-relaxed mb-6">
        "{testimonial.text}"
      </blockquote>

      {/* Attribution */}
      <div>
        <p className="font-medium text-charcoal-800">{testimonial.name}</p>
        <p className="text-sm text-charcoal-400">
          Verified purchase • {testimonial.product}
        </p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-ultra-wide uppercase text-gold-600 mb-3">
            What They Say
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-800">
            Loved by Our Community
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}