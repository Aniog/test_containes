import { testimonials } from '@/data/products';
import StarRating from '@/components/StarRating';

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[11px] font-sans font-medium tracking-[0.35em] uppercase text-gold-600 mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-wide">
            Loved by Our Community
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-cream-100 p-6 sm:p-8 text-center"
            >
              <StarRating rating={t.rating} size={16} />
              <p className="mt-4 text-charcoal-700 leading-relaxed text-sm">
                "{t.text}"
              </p>
              <p className="mt-4 text-xs font-sans font-medium tracking-widest uppercase text-charcoal-500">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
