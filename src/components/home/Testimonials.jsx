import { Star } from "lucide-react";
import { testimonials } from "../../data/products";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-velmora-bg-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-xs tracking-widest uppercase text-velmora-gold">Real Reviews</span>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-text-light mt-2 font-light">
            Loved by Thousands
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-velmora-text/60 p-6 md:p-8 border border-velmora-muted/20"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="text-sm text-velmora-text-light/80 leading-relaxed font-light italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-4 text-xs tracking-widest uppercase text-velmora-gold">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}