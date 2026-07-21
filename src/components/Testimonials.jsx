import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';
import StarRating from './StarRating';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream-dark">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-velmora-gold mb-2">
            What Our Customers Say
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-charcoal">
            Loved by Thousands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-velmora-cream p-8 md:p-10 border border-velmora-border"
            >
              <StarRating rating={t.rating} size={16} />
              <p className="mt-5 font-serif text-lg md:text-xl text-velmora-charcoal leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="mt-6 pt-5 border-t border-velmora-border">
                <p className="font-sans text-sm font-medium text-velmora-charcoal">
                  {t.name}
                </p>
                <p className="text-xs text-velmora-stone mt-0.5">Verified Buyer</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
