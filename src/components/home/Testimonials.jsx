import { Star } from "lucide-react";
import { testimonials } from "../../data/products";
import useScrollAnimation from "../../hooks/useScrollAnimation";

export default function Testimonials() {
  const [sectionRef, visible] = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-velmora-bg" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-12 reveal ${visible ? "visible" : ""}`}>
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-velmora-text-secondary mb-3">
            Real Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-text font-light">
            Loved by Our Customers
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children ${visible ? "visible" : ""}`}>
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-8 border border-velmora-border bg-velmora-card stagger-item"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-velmora-gold text-velmora-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-base md:text-lg text-velmora-text leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Name */}
              <p className="font-sans text-sm font-medium text-velmora-text mt-6">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}