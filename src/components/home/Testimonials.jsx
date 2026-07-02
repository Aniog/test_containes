import { Star } from "lucide-react";
import { testimonials } from "@/data/products";

function StarRow() {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} size={12} className="fill-velmora-gold text-velmora-gold" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-velmora-cream py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="font-manrope text-xs tracking-widest-xl uppercase text-velmora-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-velmora-obsidian">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-velmora-linen px-8 py-8 border border-velmora-sand"
            >
              <StarRow />
              <blockquote className="font-cormorant text-lg font-light text-velmora-obsidian leading-relaxed mb-6 italic">
                "{t.text}"
              </blockquote>
              <p className="font-manrope text-xs tracking-widest-sm uppercase text-velmora-text-muted">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
