import { Star } from "lucide-react";
import { testimonials } from "@/data/products";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-[11px] tracking-widest3 uppercase text-gold mb-2">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-espresso">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-lg md:text-xl font-light text-espresso leading-relaxed mb-6 flex-1">
                <span className="text-gold text-3xl leading-none font-serif">"</span>
                {t.text}
                <span className="text-gold text-3xl leading-none font-serif">"</span>
              </blockquote>

              {/* Divider */}
              <div className="w-8 h-px bg-gold mb-4" />

              {/* Author */}
              <p className="font-sans text-xs tracking-widest uppercase text-stone">
                — {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
