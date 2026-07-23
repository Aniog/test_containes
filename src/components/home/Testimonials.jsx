import { Star } from "lucide-react";
import { testimonials } from "../../data/products";

function StarRow({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} fill="#C9A96E" stroke="none" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-[11px] tracking-widest uppercase text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-obsidian">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col bg-ivory-dark p-8 border border-parchment hover:border-gold/30 transition-colors duration-300"
            >
              <StarRow count={t.rating} />
              <blockquote className="font-serif text-lg font-light text-obsidian leading-relaxed mt-5 flex-1">
                "{t.text}"
              </blockquote>
              <p className="font-sans text-xs tracking-wider uppercase text-text-muted mt-6">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
