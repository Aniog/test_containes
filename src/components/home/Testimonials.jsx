import { Star } from "lucide-react";
import { testimonials } from "../../data/products";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
            Loved by You
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-surface p-6 md:p-8 rounded-sm shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-foreground text-sm md:text-base leading-relaxed font-serif italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-4 text-xs text-muted tracking-widest uppercase">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}