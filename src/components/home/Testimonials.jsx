import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/products";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-ink">
      <div className="max-w-site mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-parchment font-light tracking-wide-heading">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-ink border border-parchment/10 p-6 md:p-8 relative"
            >
              <Quote size={24} className="text-gold/30 absolute top-4 right-4" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>

              <p className="text-sm text-parchment/70 leading-relaxed font-sans mb-6">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-xs font-medium text-gold">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm text-parchment/60 font-sans">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
