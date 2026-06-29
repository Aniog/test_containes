import { Star } from "lucide-react";
import { testimonials } from "@/data/products";

export default function Testimonials() {
  return (
    <section className="bg-velmora-surface/50 border-y border-velmora-border">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="text-center mb-14">
          <p className="text-velmora-gold text-xs tracking-[0.3em] uppercase mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-cream font-light">
            What Our Customers Say
          </h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-velmora-card border border-velmora-border p-8 text-center"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-5">
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-velmora-star text-velmora-star"
                  />
                ))}
              </div>

              <p className="text-velmora-text-secondary text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              <div className="w-8 h-px bg-velmora-gold mx-auto mb-4" />

              <p className="font-serif text-base tracking-[0.1em] text-velmora-cream">
                {t.name}
              </p>
              <p className="text-[11px] text-velmora-text-secondary mt-1 uppercase tracking-wider">
                Verified Buyer
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
