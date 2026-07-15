import { Star } from "lucide-react";
import { testimonials } from "@/data/products";

export default function Testimonials() {
  return (
    <section className="section-padding bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif text-text-primary mb-3">
            Loved by Our Community
          </h2>
          <div className="w-12 h-[1px] bg-accent-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-cream p-8 md:p-10 border border-border-light/60"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-star-gold fill-star-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-text-body text-sm md:text-base leading-relaxed font-light mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Name */}
              <p className="text-xs uppercase tracking-widest text-text-muted font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}