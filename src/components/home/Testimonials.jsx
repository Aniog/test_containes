import { Quote } from "lucide-react";
import StarRating from "@/components/ui/StarRating";
import Reveal from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/data/site";

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-cream-100">
      <div className="container-wide">
        <Reveal>
          <div className="text-center mb-14 sm:mb-16">
            <p className="eyebrow mb-3">Loved by thousands</p>
            <h2 className="font-display text-[40px] sm:text-[56px] leading-[1.05] text-onyx-800">
              From the women who wear them.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.id} delay={i * 100}>
              <figure className="bg-cream-50 border border-onyx-800/10 p-7 sm:p-9 h-full flex flex-col">
                <Quote size={22} strokeWidth={1.2} className="text-gold-400 mb-5" />
                <StarRating rating={t.rating} showCount={false} size={14} />
                <blockquote className="mt-5 font-display text-[20px] sm:text-[22px] leading-[1.4] text-onyx-800 flex-1">
                  "{t.text}"
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-onyx-800/10 flex items-center justify-between">
                  <span className="font-sans uppercase tracking-widest-2 text-[11px] text-onyx-800">
                    {t.name}
                  </span>
                  <span className="font-display italic text-[13px] text-mocha-500">
                    {t.product}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
