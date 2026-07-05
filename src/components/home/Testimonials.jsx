import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="section-padding bg-cream-50">
      <div className="container-narrow">
        <div className="text-center mb-12 lg:mb-16">
          <p className="font-sans text-sm tracking-ultra-wide uppercase text-gold-400 mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-700">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-cream-100 rounded-xl p-6 lg:p-8 relative"
            >
              <Quote size={32} className="text-cream-300 absolute top-6 right-6" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-gold-400 text-gold-400"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="font-sans text-charcoal-600 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Reviewer */}
              <div className="border-t border-cream-200 pt-4">
                <p className="font-sans font-medium text-charcoal-700">
                  {testimonial.name}
                </p>
                <p className="font-sans text-sm text-charcoal-400">
                  Purchased: {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
