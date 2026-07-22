import { Star } from "lucide-react";
import { testimonials } from "../../data/products";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-velmora-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-velmora-gold text-xs tracking-widest uppercase mb-2">
            Kind Words
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-light tracking-wide">
            Loved by Our Customers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-velmora-cream/5 p-6 md:p-8 border border-velmora-gold/10"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-velmora-gold fill-velmora-gold"
                  />
                ))}
              </div>
              <p className="text-velmora-light/80 leading-relaxed text-sm italic font-serif">
                "{t.text}"
              </p>
              <p className="text-velmora-gold text-xs tracking-wider uppercase mt-4">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}