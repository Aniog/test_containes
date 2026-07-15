import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-neutral-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Real stories from women who love their Velmora pieces.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-neutral-50 rounded-lg p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-neutral-200">
                <Quote className="w-8 h-8" />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-brand-400 text-brand-400"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-neutral-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-serif font-semibold text-neutral-900">
                    {testimonial.name}
                  </p>
                  <p className="text-neutral-500 text-sm">
                    Purchased: {testimonial.product}
                  </p>
                </div>
                <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
                  <span className="text-brand-600 font-serif font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}