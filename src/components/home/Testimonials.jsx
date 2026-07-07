import { Star } from "lucide-react";
import { EDITORIAL } from "@/data/products";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-ivory border-t border-hairline">
      <div className="max-w-container mx-auto px-5 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted mb-3">
            Loved by 12,000+ women
          </p>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight">
            From the community
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {EDITORIAL.testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col items-center text-center md:text-left md:items-start"
            >
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-champagne text-champagne"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <blockquote className="font-serif text-xl md:text-2xl leading-snug text-ink">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 text-[12px] uppercase tracking-editorial text-muted">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
