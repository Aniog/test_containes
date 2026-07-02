import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/products";

export function Testimonials() {
  return (
    <section className="bg-velmora-cream py-16 md:py-24">
      <div className="container-velmora">
        <div className="mb-10 text-center">
          <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-velmora-muted">
            Customer Love
          </p>
          <h2 className="font-serif text-3xl tracking-wide md:text-4xl">
            What She Wears
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="border border-velmora-border bg-velmora-bg p-8 transition-shadow duration-300 hover:shadow-sm"
            >
              <div className="mb-4 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-velmora-gold text-velmora-gold"
                  />
                ))}
              </div>
              <p className="mb-6 text-base leading-relaxed text-velmora-fg">
                “{review.text}”
              </p>
              <p className="text-xs font-medium uppercase tracking-widest text-velmora-muted">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
