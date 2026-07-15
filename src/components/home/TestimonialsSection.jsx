import { Star } from "lucide-react";
import { testimonials } from "@/data/products";

function StarRow({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} strokeWidth={0} fill="#C9A96E" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-inter text-xs uppercase tracking-widest text-gold mb-2">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-espresso">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col gap-4 p-8 bg-parchment border border-linen"
            >
              <StarRow count={t.rating} />
              <p className="font-cormorant text-lg font-light text-espresso leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="mt-auto pt-4 border-t border-linen">
                <p className="font-inter text-xs uppercase tracking-widest text-umber">
                  — {t.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <div className="text-center mt-10">
          <p className="font-inter text-xs text-stone-warm">
            Over 50,000 happy customers · 4.9 average rating
          </p>
        </div>
      </div>
    </section>
  );
}
