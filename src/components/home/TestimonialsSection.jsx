import { Star } from "lucide-react";
import { testimonials } from "@/data/products";

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-ivory border-t border-taupe">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-manrope text-[10px] uppercase tracking-widest text-gold mb-3">
            Customer Love
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal">
            What They're Saying
          </h2>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-cream-white border border-taupe p-8 flex flex-col gap-5"
            >
              {/* Stars */}
              <div className="flex items-center gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-cormorant text-lg font-light text-charcoal leading-relaxed italic flex-1">
                "{review.text}"
              </p>

              {/* Attribution */}
              <div className="border-t border-taupe pt-4">
                <p className="font-manrope text-xs font-medium text-charcoal">
                  {review.name}
                </p>
                <p className="font-manrope text-[10px] uppercase tracking-widest text-warm-gray mt-0.5">
                  Verified Purchase · {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
