import { Star } from "lucide-react";
import { testimonials } from "@/data/products";

export default function Testimonials() {
  return (
    <section className="section-padding py-16 md:py-24 bg-velmora-cream">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-xs tracking-widester uppercase text-velmora-muted mb-2">Reviews</p>
        <h2 className="font-heading text-3xl md:text-4xl">Loved by Thousands</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {testimonials.map((t) => (
          <div key={t.id} className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-0.5 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
              ))}
            </div>
            <p className="text-velmora-charcoal leading-relaxed mb-5 text-[15px]">
              "{t.text}"
            </p>
            <p className="text-xs tracking-widester uppercase text-velmora-muted font-medium">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
