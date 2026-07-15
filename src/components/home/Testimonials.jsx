import { Star } from "lucide-react";
import { testimonials } from "@/data/products";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[0.2em] uppercase text-gold-600 font-sans font-medium">
            Kind Words
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-warm-900 font-light">
            From Our Community
          </h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 md:p-8 border border-warm-200/50"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-gold-500 text-gold-500"
                  />
                ))}
              </div>
              <p className="text-sm text-warm-700 font-sans leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-4 text-xs tracking-wider uppercase text-warm-500 font-sans font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}