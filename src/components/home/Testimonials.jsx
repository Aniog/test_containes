import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/products";
import { useReveal } from "@/hooks/useReveal";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Testimonials() {
  const ref = useRef(null);
  useReveal(ref);
  return (
    <section ref={ref} className="bg-cream-deep py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-screen-2xl px-5 md:px-8 lg:px-12">
        <div className="reveal text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <Eyebrow>Loved By You</Eyebrow>
          <SectionTitle className="mt-3">
            12,000+ pieces worn, gifted, kept.
          </SectionTitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.id}
              className="reveal bg-ivory p-8 md:p-10 flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-0.5 text-champagne" aria-label={`${t.rating} stars`}>
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" strokeWidth={0} />
                ))}
              </div>
              <Quote className="h-7 w-7 text-champagne mt-5" strokeWidth={1.2} />
              <p className="mt-4 font-serif text-xl md:text-[22px] leading-snug text-espresso font-light flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-8 pt-5 border-t border-espresso/10 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-eyebrow font-medium text-espresso">
                    {t.name}
                  </p>
                  <p className="mt-1 text-[11px] text-taupe">
                    on the {t.product}
                  </p>
                </div>
                <span className="text-[10px] uppercase tracking-eyebrow text-taupe">
                  Verified
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
