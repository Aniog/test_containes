import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/products";

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-title"
      className="bg-cream py-20 md:py-28"
    >
      <div className="mx-auto max-w-editorial px-5 md:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow">From Our Community</p>
          <h2
            id="testimonials-title"
            className="mt-3 font-display text-4xl md:text-5xl leading-tight"
          >
            Kind words, written in.
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <li
              key={t.name}
              className="bg-cream-soft border border-line p-7 md:p-8 flex flex-col"
            >
              <div className="flex items-center gap-0.5 text-gold">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="star" />
                ))}
              </div>
              <blockquote className="mt-5 font-display text-xl leading-snug text-ink">
                <span aria-hidden="true" className="text-gold">“</span>
                {t.quote}
                <span aria-hidden="true" className="text-gold">”</span>
              </blockquote>
              <div className="mt-6 pt-5 border-t border-line">
                <p className="cta-caps text-[11px] text-ink">{t.name}</p>
                <p className="mt-1 text-[11px] tracking-eyebrow uppercase text-ink-soft">
                  On the {t.product}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
