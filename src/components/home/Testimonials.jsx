import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-velmora-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-caption uppercase tracking-widest-2xl text-velmora-gold mb-3">
            Love Letters
          </p>
          <h2 className="font-serif text-heading-xl md:text-[3.5rem] text-velmora-charcoal">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-velmora-ivory p-8 md:p-10 relative group hover:shadow-lg transition-shadow duration-500"
            >
              {/* Quote mark */}
              <Quote
                size={32}
                className="text-velmora-gold/20 absolute top-6 right-6"
                strokeWidth={1}
              />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < testimonial.rating ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-light'}
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-body text-velmora-graphite leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Reviewer info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-velmora-gold-muted flex items-center justify-center">
                  <span className="text-sm font-serif font-medium text-velmora-gold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-body-sm text-velmora-charcoal font-medium">
                    {testimonial.name}
                  </p>
                  <p className="text-[11px] text-velmora-muted">
                    Purchased: {testimonial.product}
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
