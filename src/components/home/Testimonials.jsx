import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
          What Our Customers Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map(t => (
          <div key={t.id} className="text-center px-4">
            <div className="flex items-center justify-center gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4" fill="#B8860B" stroke="#B8860B" />
              ))}
            </div>
            <p className="text-charcoal text-sm leading-relaxed italic">
              "{t.text}"
            </p>
            <p className="mt-4 text-xs uppercase tracking-nav text-stone font-medium">
              — {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
