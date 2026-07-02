import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/products";

export function Testimonials() {
  return (
    <section className="bg-parchment py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-gold">
            Reviews
          </p>
          <h2 className="font-serif text-3xl font-light sm:text-4xl">
            Loved by Thousands
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="border border-hairline bg-cream p-6 transition-shadow duration-300 hover:shadow-sm sm:p-8"
            >
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold text-gold"
                  />
                ))}
              </div>
              <p className="mb-6 text-base leading-relaxed text-espresso">
                “{review.text}”
              </p>
              <p className="text-xs font-semibold uppercase tracking-widest text-mocha">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
