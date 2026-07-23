import { Star } from "lucide-react";
import { testimonials } from "@/data/products";

function StarRow() {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} size={12} className="fill-gold text-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream border-t border-divider">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-sans uppercase tracking-ultra-wide text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso font-light">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col">
              <StarRow />
              <blockquote className="font-serif text-lg text-espresso font-light leading-relaxed italic flex-1 mb-6">
                "{t.text}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gold" />
                <p className="text-xs font-sans uppercase tracking-widest text-stone">
                  {t.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust numbers */}
        <div className="mt-16 pt-12 border-t border-divider grid grid-cols-3 gap-8 text-center">
          {[
            { value: "10,000+", label: "Happy Customers" },
            { value: "4.9★", label: "Average Rating" },
            { value: "98%", label: "Would Recommend" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="font-serif text-3xl md:text-4xl text-espresso font-light">{value}</p>
              <p className="text-xs font-sans uppercase tracking-widest text-stone mt-2">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
