import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-8 lg:px-12 border-t border-border bg-muted-bg/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(review => (
            <div key={review.id} className="bg-cream p-6 md:p-8 border border-border">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-charcoal leading-relaxed italic">
                "{review.text}"
              </p>
              <p className="text-xs text-muted mt-4 font-medium tracking-wide uppercase">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
