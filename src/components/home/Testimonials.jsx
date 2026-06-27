import { Star } from "lucide-react";
import { testimonials } from "@/data/products";

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-14">
          <p className="text-[11px] tracking-[0.35em] uppercase text-gold mb-4">
            Reviews
          </p>
          <h2 className="font-serif font-light text-4xl md:text-5xl leading-[1.05] tracking-tight">
            Loved by 25,000+ customers.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="text-center md:text-left flex flex-col"
            >
              <div className="flex items-center justify-center md:justify-start gap-1 text-gold mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} strokeWidth={1.2} fill="currentColor" />
                ))}
              </div>
              <blockquote className="font-serif text-xl md:text-[22px] leading-relaxed text-ink/90 italic">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 text-[11px] tracking-[0.3em] uppercase text-ink/60">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
