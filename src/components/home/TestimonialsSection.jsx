import { StarRating } from '@/components/ui/StarRating';
import { TESTIMONIALS } from '@/data/products';

export function TestimonialsSection() {
  return (
    <section className="bg-velmora-champagne/40 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 font-display text-xs font-medium uppercase tracking-superwide text-velmora-gold-dark">
            Client Love
          </p>
          <h2 className="font-serif text-4xl font-light text-velmora-espresso md:text-5xl">
            Treasured by Many
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <article
              key={testimonial.id}
              className="bg-velmora-cream p-8 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <StarRating rating={testimonial.rating} size={14} />
              <p className="mt-5 font-display text-base font-light leading-relaxed text-velmora-brown">
                “{testimonial.text}”
              </p>
              <p className="mt-6 font-display text-xs font-semibold uppercase tracking-widest text-velmora-espresso">
                {testimonial.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
