import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 border-t border-taupe">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-3">What Our Customers Say</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map(t => (
          <div key={t.id} className="text-center px-4">
            <div className="flex items-center justify-center gap-0.5 mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="font-sans text-sm text-charcoal leading-relaxed mb-4 italic">
              "{t.text}"
            </p>
            <p className="font-sans text-xs text-warm-gray font-medium uppercase tracking-wide-sm">
              — {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
