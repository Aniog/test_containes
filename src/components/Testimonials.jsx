import { StarRating } from "@/components/ui/StarRating";
import { testimonials } from "@/data/products";

export function Testimonials() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-gold">
            Reviews
          </p>
          <h2 className="font-serif text-3xl text-espresso md:text-4xl">
            Loved by Our Community
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="border border-stone-200 bg-ivory p-8 text-center transition-shadow duration-300 hover:shadow-card"
            >
              <StarRating rating={review.rating} className="mb-5 justify-center" />
              <p className="font-serif text-lg italic leading-relaxed text-espresso">
                "{review.text}"
              </p>
              <p className="mt-6 text-xs uppercase tracking-widest text-warm-gray">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
