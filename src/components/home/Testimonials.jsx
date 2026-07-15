import { testimonials } from '@/data/products';
import StarRating from '@/components/shared/StarRating';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.2em] uppercase text-velmora-muted mb-3">Reviews</p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-charcoal">What Our Customers Say</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white border border-velmora-border/60 p-8 flex flex-col items-center text-center"
          >
            <StarRating rating={t.rating} size={14} />
            <p className="mt-5 font-serif text-base md:text-lg italic text-velmora-charcoal leading-relaxed">
              "{t.text}"
            </p>
            <p className="mt-5 text-xs tracking-widest uppercase text-velmora-muted font-medium">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
