import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/catalog";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-gold">
            The Velmora Letters
          </span>
          <h2 className="mt-3 font-serif font-light text-4xl md:text-5xl tracking-tight text-onyx">
            From Those Who Wear It
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.id}
              className="bg-bone border border-hairline p-8 md:p-10 flex flex-col"
            >
              <Quote
                size={22}
                strokeWidth={1.25}
                className="text-gold mb-5"
              />
              <div className="flex items-center gap-0.5 text-gold mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} strokeWidth={1.25} className="fill-gold" />
                ))}
              </div>
              <blockquote className="font-serif text-lg md:text-xl leading-relaxed text-espresso flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-hairline-dark">
                <p className="font-sans text-sm text-onyx">{t.name}</p>
                <p className="font-sans text-xs text-taupe mt-1">
                  {t.location}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
