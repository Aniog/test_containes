import { useRef } from "react";
import { TESTIMONIALS } from "@/data/testimonials.js";
import StarRating from "@/components/common/StarRating.jsx";
import { useStrkImages } from "@/lib/imageLoader.js";

export default function Testimonials() {
  const ref = useRef(null);
  useStrkImages(ref);

  return (
    <section ref={ref} className="bg-cream py-20 md:py-28">
      <div className="container-wide">
        <div className="flex flex-col items-center text-center gap-3 mb-12 md:mb-16">
          <span className="eyebrow">From our community</span>
          <h2 className="font-serif font-light text-3xl md:text-5xl text-ink leading-[1.1] max-w-2xl">
            Real words, real wear, real love.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.id}
              className="flex flex-col items-start gap-5 p-8 bg-surface border border-line"
            >
              <StarRating value={t.rating} size={16} />
              <p className="font-serif text-xl md:text-2xl font-light text-ink leading-snug">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-auto pt-4 border-t border-line-soft w-full">
                <p className="font-sans text-sm font-medium text-ink">
                  {t.name}
                </p>
                <p className="font-sans text-xs text-ink-muted tracking-wide mt-0.5">
                  {t.location} · <span className="uppercase tracking-[0.18em]">{t.productName}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
