import { testimonials } from '@/data/products';
import StarRating from '@/components/ui/StarRating';

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-cream">
            Loved by Thousands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-brand-base border border-white/5 p-8 flex flex-col"
            >
              <StarRating rating={t.rating} size={14} />
              <p className="mt-4 text-brand-warm leading-relaxed flex-1">
                "{t.text}"
              </p>
              <p className="mt-6 text-xs uppercase tracking-widest text-brand-muted">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}