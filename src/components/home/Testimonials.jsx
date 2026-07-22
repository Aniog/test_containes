import { Star } from "lucide-react";
import { testimonials } from "@/data/products";

function StarRow({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={11}
          fill={i < rating ? "#C9A96E" : "#D4CFC8"}
          strokeWidth={0}
          className={i < rating ? "text-gold" : "text-warm-gray-light"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-3">Reviews</p>
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-espresso">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col">
              <StarRow rating={t.rating} />
              <blockquote className="font-cormorant text-lg md:text-xl font-light text-espresso leading-relaxed mt-4 flex-1 italic">
                "{t.text}"
              </blockquote>
              <div className="mt-5 pt-5 border-t border-warm-gray-light flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-parchment flex items-center justify-center">
                  <span className="font-cormorant text-sm text-espresso font-medium">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="font-inter text-xs uppercase tracking-[0.12em] text-charcoal">
                  {t.name}
                </span>
                <span className="font-inter text-[10px] text-warm-gray ml-auto">Verified Buyer</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
