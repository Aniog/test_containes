import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-bg-elevated">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-text mb-3">
            What Our Customers Say
          </h2>
          <p className="text-text-secondary text-sm max-w-md mx-auto">
            Real stories from women who wear Velmora every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-bg-card rounded-lg p-6 md:p-8 shadow-card"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="#B08D57"
                    strokeWidth={0}
                    className="text-text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between border-t border-border-light pt-4">
                <div>
                  <p className="font-medium text-text text-sm">{testimonial.name}</p>
                  <p className="text-text-muted text-xs mt-0.5">Verified Buyer</p>
                </div>
                <span className="text-text-muted text-xs">{testimonial.product}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
