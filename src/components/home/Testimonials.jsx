import { Star } from "lucide-react";
import { testimonials } from "../../data/products";

export default function Testimonials() {
  return (
    <section className="bg-blush/40 py-20 lg:py-28 border-t border-gold/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-obsidian font-light">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-ivory p-8 lg:p-10 border border-gold/15 hover:border-gold/30 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-gold text-gold"
                    strokeWidth={0}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg text-obsidian leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="font-serif text-sm text-gold font-500">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="font-sans text-xs tracking-widest uppercase text-taupe">
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
