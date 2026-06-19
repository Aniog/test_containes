import { testimonials } from '@/data/products';
import StarRating from '@/components/ui/StarRating';

export default function Testimonials() {
  return (
    <section className="bg-cream-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.35em] uppercase text-gold-600 font-medium mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink-900">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-ink-200 rounded-sm p-6 sm:p-8 text-center hover:shadow-md transition-shadow duration-300"
            >
              <StarRating rating={t.rating} size={14} />
              <p className="mt-5 text-sm text-ink-700 leading-relaxed italic font-serif">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-5 text-xs tracking-widest uppercase font-medium text-ink-500">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
