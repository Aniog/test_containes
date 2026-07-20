import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl text-charcoal text-center mb-12">What Our Customers Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(review => (
            <div key={review.id} className="text-center px-4">
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-light text-accent-light" />
                ))}
              </div>
              <p className="font-sans text-sm text-muted-fg leading-relaxed italic">
                "{review.text}"
              </p>
              <p className="mt-4 font-sans text-xs uppercase tracking-wider text-charcoal">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
