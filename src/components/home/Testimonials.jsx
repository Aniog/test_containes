import React from "react";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/products";
import { useReveal } from "@/lib/useReveal";

export default function Testimonials() {
  const ref = useReveal();
  return (
    <section className="bg-cream-50 py-20 md:py-28 border-t border-hairline">
      <div className="max-w-editorial mx-auto px-5 sm:px-8" ref={ref}>
        <div className="reveal text-center max-w-xl mx-auto mb-12 md:mb-16">
          <p className="eyebrow mb-4">Worn & loved</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.05]">
            From the people wearing them.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <article
              key={t.id}
              className="reveal bg-cream p-8 md:p-10 flex flex-col h-full"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote size={22} strokeWidth={1.4} className="text-gold-400 mb-5" />
              <p className="font-serif text-lg md:text-xl leading-relaxed text-ink flex-1">
                "{t.quote}"
              </p>
              <div className="mt-8 pt-6 border-t border-hairline">
                <p className="font-sans text-[13px] text-ink font-medium">
                  {t.name}
                </p>
                <p className="font-sans text-[11px] tracking-widest2 uppercase text-sand-600 mt-1">
                  On the {t.product}
                </p>
                <div className="mt-3 flex items-center gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                  {[0, 1, 2, 3, 4].map((s) => (
                    <span key={s} className="text-gold-400 text-base leading-none">★</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
