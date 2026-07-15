import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-ivory">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light">
          What Our Customers Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
        {testimonials.map(t => (
          <div key={t.id} className="bg-cream p-6 md:p-8 border border-border">
            {/* Stars */}
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-charcoal leading-relaxed italic">
              "{t.text}"
            </p>
            <p className="mt-4 text-xs font-medium text-muted uppercase tracking-widest">
              — {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
