import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/products";

export default function Testimonials() {
  return (
    <section
      className="bg-ivory text-espresso py-20 md:py-28"
      aria-labelledby="testimonials-title"
    >
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p id="testimonials-eyebrow" className="eyebrow mb-3">
            Kind Words
          </p>
          <h2
            id="testimonials-title"
            className="font-serif text-4xl md:text-5xl"
          >
            What our community is saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="flex flex-col items-start pt-2"
            >
              <Quote
                className="w-7 h-7 text-brass/60 mb-4"
                strokeWidth={1.2}
              />
              <p className="font-serif text-xl md:text-2xl leading-snug text-espresso">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-brass text-brass"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.22em] text-espresso/70">
                — {t.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
