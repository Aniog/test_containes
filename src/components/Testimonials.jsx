import { testimonials } from '../data/products';
import StarRating from './StarRating';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-ultra uppercase text-gold mb-3">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light">Loved by Thousands</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-cream p-6 md:p-8 border border-divider"
            >
              <StarRating rating={t.rating} size={14} />
              <p className="mt-4 text-sm leading-relaxed text-charcoal">
                "{t.text}"
              </p>
              <p className="mt-5 text-xs tracking-widest uppercase font-medium text-stone">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
