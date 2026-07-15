import { StarRating } from '@/components/StarRating';
import { testimonials } from '@/data/products';

export function Testimonials() {
  return (
    <section className="bg-velmora-cream py-16 md:py-24">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <h2 className="mb-10 text-center font-serif text-3xl text-velmora-charcoal md:mb-14 md:text-4xl">
          Loved by Our Community
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="border border-velmora-stone bg-white p-8 transition-shadow duration-300 hover:shadow-sm"
            >
              <StarRating rating={testimonial.rating} size={14} />
              <p className="mt-5 font-sans font-light leading-relaxed text-velmora-charcoal">
                “{testimonial.text}”
              </p>
              <p className="mt-6 font-sans text-xs font-semibold uppercase tracking-widest text-velmora-gold">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
