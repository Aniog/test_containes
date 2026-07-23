import { Star } from "lucide-react";
import { testimonials } from "@/data/products";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-14">
          <h2 className="section-title">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col items-center text-center p-8 border border-velmora-border rounded-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-velmora-gold text-velmora-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-velmora-text-secondary text-sm font-sans leading-relaxed italic mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Name */}
              <span className="text-velmora-text-primary text-xs uppercase tracking-[0.2em] font-sans mt-auto">
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}