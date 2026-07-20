import { Star } from "lucide-react";
import { testimonials } from "../../data/products";

function StarRow() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} size={12} style={{ color: "#C9A96E", fill: "#C9A96E" }} strokeWidth={1} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-ivory">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-sans uppercase tracking-widest text-gold mb-2">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-obsidian">
            What Our Customers Say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-ivory-dark px-8 py-8 border border-taupe-light/20 hover:shadow-[0_8px_32px_rgba(28,26,24,0.08)] transition-shadow duration-400"
            >
              <StarRow />
              <p className="font-serif text-lg font-light italic text-obsidian leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blush flex items-center justify-center">
                  <span className="text-xs font-sans font-semibold text-taupe">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="text-xs font-sans uppercase tracking-widest text-taupe font-medium">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <div className="text-center mt-10">
          <p className="text-xs font-sans text-taupe-light">
            4.8 average · 500+ verified reviews
          </p>
        </div>
      </div>
    </section>
  );
}
