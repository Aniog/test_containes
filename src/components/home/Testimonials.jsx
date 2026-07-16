import { Star } from 'lucide-react';
import { testimonials } from '@/lib/data';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="p-6 md:p-8 border border-sand bg-ivory">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold" fill="#B8860B" />
                ))}
              </div>
              <p className="text-sm text-charcoal font-sans leading-relaxed italic">
                "{t.text}"
              </p>
              <p className="mt-4 text-xs font-sans font-medium text-stone uppercase tracking-wide">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
