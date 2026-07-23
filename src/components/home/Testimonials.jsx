import { testimonials } from '@/lib/data';
import StarRating from '@/components/ui/StarRating';

export default function Testimonials() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center font-serif text-3xl md:text-4xl text-espresso">
          What Our Customers Say
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col border border-stoneborder bg-white p-8 transition-shadow duration-300 hover:shadow-sm"
            >
              <StarRating rating={t.rating} size={14} />
              <p className="mt-5 flex-1 font-serif text-lg italic leading-relaxed text-espresso">
                “{t.text}”
              </p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-warmstone">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}