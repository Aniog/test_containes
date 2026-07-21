import { useRef } from "react";
import { Star } from "lucide-react";
import { testimonials } from "../../data/products";
import { useImageHelper } from "../../hooks/useImageHelper";

function Stars() {
  return (
    <div className="flex items-center gap-1 text-gold" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-3.5 w-3.5"
          strokeWidth={0}
          fill="currentColor"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef(null);
  useImageHelper(sectionRef, []);

  return (
    <section
      ref={sectionRef}
      className="bg-champagne py-20 md:py-28 border-t border-sand"
      aria-labelledby="testimonials-title"
    >
      <div className="container-velmora">
        <div className="text-center max-w-xl mx-auto mb-12 md:mb-16">
          <p className="eyebrow">Loved by</p>
          <h2
            id="testimonials-title"
            className="heading-display text-3xl md:text-4xl mt-3"
          >
            Twelve thousand quiet rituals.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="bg-ivory p-8 md:p-10 border border-sand flex flex-col"
            >
              <Stars />
              <blockquote className="mt-6 font-serif text-xl md:text-2xl leading-snug text-espresso">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-sand font-sans text-[11px] uppercase tracking-widest2 text-ink-soft">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
