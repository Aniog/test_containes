import { Star } from "lucide-react";
import { testimonials } from "@/data/products";

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-20 bg-[#FDFCFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-velmora-gold text-xs tracking-[0.25em] uppercase font-sans font-medium mb-3">
            Kind Words
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-velmora-charcoal font-light">
            Loved by Thousands
          </h2>
          <div className="w-12 h-[1px] bg-velmora-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-velmora-ivory p-6 sm:p-8 rounded-sm"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-velmora-gold text-velmora-gold"
                  />
                ))}
              </div>
              <p className="text-sm text-velmora-charcoal-light font-sans leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs tracking-wider uppercase font-sans font-medium text-velmora-charcoal">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}