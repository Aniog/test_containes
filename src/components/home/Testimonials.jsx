import { Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { format, parseISO } from 'date-fns';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-subheading mb-3">What Our Customers Say</p>
          <h2 className="section-heading">Loved & Trusted</h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 md:p-10 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-sand'}`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-sans text-sm text-velmora-charcoal leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-serif text-base text-velmora-charcoal">{testimonial.name}</p>
                  <p className="font-sans text-xs text-velmora-warm-gray mt-0.5">
                    on {testimonial.product}
                  </p>
                </div>
                <span className="font-sans text-xs text-velmora-soft-gray">
                  {format(parseISO(testimonial.date), 'MMM yyyy')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
