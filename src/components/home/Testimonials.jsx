import { StarRating } from "@/components/ui/StarRating";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-linen py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <p className="mb-2 text-center text-[10px] uppercase tracking-[0.25em] text-gold">
          Reviews
        </p>
        <h2 className="mb-12 text-center font-serif text-3xl md:text-4xl">
          Loved by Our Customers
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="border border-hairline bg-cream p-8 transition-shadow duration-300 hover:shadow-lg"
            >
              <StarRating rating={t.rating} size={14} className="mb-4" />
              <p className="font-serif text-xl italic leading-snug text-espresso">
                “{t.text}”
              </p>
              <p className="mt-6 text-xs uppercase tracking-widest text-warm-gray">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
