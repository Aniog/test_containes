import { testimonials } from '@/data/products';
import StarRating from '@/components/StarRating';

export default function TestimonialsSection() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-10 text-center md:mb-14">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-accent">
            Reviews
          </p>
          <h2 className="font-serif text-3xl text-base md:text-4xl">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col items-center border border-border bg-canvas p-8 text-center"
            >
              <StarRating rating={t.rating} size={14} />
              <p className="mt-5 text-sm leading-relaxed text-base">
                "{t.text}"
              </p>
              <p className="mt-5 text-xs font-medium uppercase tracking-widest text-muted">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
