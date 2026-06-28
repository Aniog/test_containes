import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/products";

function Stars() {
  return (
    <div className="flex items-center gap-0.5 mb-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className="fill-champagne text-champagne" strokeWidth={1.5} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream border-y border-hairline">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.32em] text-champagne mb-3">
            Reviews
          </p>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-ink leading-[1.1]">
            From those who wear it.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.id}
              className="bg-ivory p-8 md:p-10 border border-hairline relative"
            >
              <Stars />
              <blockquote className="font-serif text-xl md:text-[22px] leading-[1.45] text-ink">
                <span className="text-champagne text-3xl leading-none align-top mr-1">“</span>
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-hairline text-[11px] uppercase tracking-[0.22em] font-medium text-taupe">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
