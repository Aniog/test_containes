import { Star } from "lucide-react";
import { testimonials } from "@/data/products";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-primary">
            Loved by You
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center">
              {/* Avatar */}
              <div className="w-14 h-14 rounded-full bg-light-accent mx-auto mb-5 flex items-center justify-center">
                <span className="text-lg font-serif text-accent font-medium">
                  {t.name.charAt(0)}
                </span>
              </div>

              {/* Stars */}
              <div className="flex items-center justify-center gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-star text-star"
                  />
                ))}
              </div>

              <blockquote className="text-secondary text-sm md:text-base leading-relaxed italic font-serif">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <p className="text-xs uppercase tracking-[0.1em] font-medium text-primary mt-4">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}