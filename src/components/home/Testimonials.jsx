import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-text-primary">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-card-white p-8 md:p-10 text-center">
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-4 font-serif text-sm tracking-[0.15em] uppercase text-text-primary">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
