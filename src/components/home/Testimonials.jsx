import { Star } from "lucide-react";
import { testimonials } from "@/data/products";
import ScrollReveal from "@/components/ui/ScrollReveal";

function StarRow({ count = 5 }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" strokeWidth={0} />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="container-content py-20 md:py-28"
    >
      <ScrollReveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">From the Community</p>
          <h2
            id="testimonials-heading"
            className="mt-3 font-serif text-4xl text-ink md:text-5xl"
          >
            Worn & Loved
          </h2>
        </div>
      </ScrollReveal>

      <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-10">
        {testimonials.map((t, idx) => (
          <ScrollReveal key={t.id} delay={idx * 100}>
            <figure className="flex h-full flex-col items-start border-t border-hairline pt-7">
              <StarRow count={t.rating} />
              <blockquote className="mt-5 font-serif text-2xl leading-snug text-ink md:text-[1.7rem]">
                <p>“{t.quote}”</p>
              </blockquote>
              <figcaption className="mt-6 flex w-full items-baseline justify-between">
                <p className="text-sm font-medium text-ink">
                  — {t.name}
                </p>
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft">
                  on {t.product}
                </p>
              </figcaption>
            </figure>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
