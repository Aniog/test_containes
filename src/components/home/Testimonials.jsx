import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/products";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container-velmora">
        <div className="text-center mb-14 md:mb-20">
          <p className="eyebrow mb-4">Loved by Thousands</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.05] text-ink">
            Quiet words,
            <span className="italic"> loud devotion.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.id}
              className="bg-bone border border-line p-8 md:p-10 flex flex-col"
            >
              <div
                className="flex items-center gap-1 mb-6"
                aria-label={`${t.rating} out of 5 stars`}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-gold text-gold"
                    strokeWidth={1}
                  />
                ))}
              </div>
              <blockquote className="font-serif text-lg md:text-xl font-light italic leading-snug text-ink flex-1">
                "{t.body}"
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-line text-[11px] uppercase tracking-eyebrow text-ink">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}