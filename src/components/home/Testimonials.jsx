import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="section-padding bg-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-sans text-xs tracking-widest uppercase text-gold-400 mb-2 block">
            Love Letters
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-cream-50">
            What Our Customers Say
          </h2>
          <div className="w-16 h-px bg-gold-500 mx-auto mt-4" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-charcoal-700/50 p-8 text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-gold-400 fill-gold-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg text-cream-100/90 italic leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <p className="font-sans text-sm text-cream-200/70 tracking-wider">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
