import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-gold-accent mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-deep-base">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-sm shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              <Quote size={24} className="text-gold-light mb-4" strokeWidth={1} />

              <p className="font-sans text-sm text-warm-gray leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < testimonial.rating ? 'fill-gold-accent text-gold-accent' : 'text-warm-border'}
                  />
                ))}
              </div>

              <div>
                <p className="font-sans text-sm font-medium text-deep-base">
                  {testimonial.name}
                </p>
                <p className="font-sans text-xs text-warm-gray mt-0.5">
                  on {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
