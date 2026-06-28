import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/products";

function Stars() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-velmora-gold text-velmora-gold" strokeWidth={1.2} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-velmora-cream">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] uppercase tracking-[0.32em] text-velmora-taupe">
            Testimonials
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light text-velmora-ink md:text-5xl">
            Loved, worn, gifted.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-10">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col border-t border-velmora-ink/15 pt-8"
            >
              <Stars />
              <blockquote className="mt-5 font-serif text-xl leading-snug text-velmora-ink md:text-2xl">
                <span className="text-velmora-gold-deep">“</span>
                {t.quote}
                <span className="text-velmora-gold-deep">”</span>
              </blockquote>
              <figcaption className="mt-6 text-[11px] uppercase tracking-[0.28em] text-velmora-taupe">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
