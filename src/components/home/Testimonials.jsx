import { testimonials } from '@/data/products';
import StarRating from '@/components/ui/StarRating';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-surface-alt">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <h2 className="font-serif text-3xl md:text-4xl text-text-primary font-normal text-center mb-10 md:mb-14">
          Loved By Many
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-surface border border-hairline p-6 md:p-8 flex flex-col"
            >
              <StarRating rating={t.rating} size={14} />
              <p className="mt-4 font-sans text-sm text-text-primary leading-relaxed flex-1">
                "{t.text}"
              </p>
              <p className="mt-5 font-sans text-xs uppercase tracking-label text-text-secondary">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
