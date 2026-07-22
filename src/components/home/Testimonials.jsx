import React from "react";
import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    text: "The quality is stunning for the price. I’ve worn my huggies every day for three months and they still look brand new.",
  },
  {
    id: 2,
    name: "Jessica T.",
    text: "Bought the Royal Heirloom Set as a birthday gift and she absolutely loved it. The packaging felt so premium.",
  },
  {
    id: 3,
    name: "Amanda K.",
    text: "Finally found jewelry that looks expensive without the guilt. The ear cuff is my most complimented piece.",
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="bg-brand-ivory px-6 py-16 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px]">
        <div
          className={cn("mb-12 text-center", isVisible && "animate-fadeUp")}
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-brand-rose-dark">
            Reviews
          </p>
          <h2 className="mt-3 font-serif text-4xl text-brand-charcoal md:text-5xl">
            Loved by You
          </h2>
        </div>

        <div
          className={cn(
            "grid gap-6 md:grid-cols-3",
            isVisible && "animate-fadeUp"
          )}
          style={{ animationDelay: isVisible ? "0.15s" : "0s" }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="border border-brand-charcoal/10 bg-brand-cream/40 p-8 text-center"
            >
              <div className="flex justify-center gap-1 text-brand-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-brand-charcoal/85">
                “{t.text}”
              </p>
              <p className="mt-6 text-[11px] font-medium uppercase tracking-widest text-brand-taupe">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
