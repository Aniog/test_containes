import { Star } from "lucide-react";
import { testimonials } from "../../data/products";

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} size={12} className="text-gold fill-gold" strokeWidth={1} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-xs uppercase tracking-widest text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-obsidian font-light">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col px-8 py-8 border border-ivory-dark hover:border-gold/40 transition-colors duration-300"
            >
              <Stars />
              <p className="font-serif text-lg text-obsidian font-light leading-relaxed italic flex-1">
                "{t.text}"
              </p>
              <p className="font-sans text-xs uppercase tracking-widest text-taupe mt-6">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
