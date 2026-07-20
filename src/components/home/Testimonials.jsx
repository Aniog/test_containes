import { Star } from "lucide-react";
import { testimonials } from "@/data/products";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-sans text-champagne text-xs tracking-widest3 uppercase mb-3">
            What They Say
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-obsidian font-light">
            Loved by Thousands
          </h2>
          <div className="w-12 h-px bg-champagne mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-ivory-dark p-8 flex flex-col gap-4 border border-ivory-dark hover:border-champagne/30 transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} className="fill-champagne text-champagne" strokeWidth={0} />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg text-obsidian leading-relaxed italic flex-1">
                "{t.text}"
              </p>

              {/* Name */}
              <div className="flex items-center gap-3 pt-2 border-t border-ivory-dark">
                <div className="w-8 h-8 rounded-full bg-champagne-pale flex items-center justify-center">
                  <span className="font-serif text-champagne text-sm font-medium">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <p className="font-sans text-xs text-stone tracking-widest uppercase">
                  {t.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
