import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-ink-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-gold-400/80 text-xs uppercase tracking-widestplus font-medium">Real Reviews</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-cream-50 font-light mt-3 tracking-wide">
            Loved by Thousands
          </h2>
          <div className="w-12 h-px bg-gold-500/50 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-cream-50/5 border border-cream-50/10 p-6 sm:p-8 rounded-sm"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-cream-50/80 text-sm leading-relaxed font-light italic">
                "{t.text}"
              </p>

              {/* Name */}
              <div className="mt-4 pt-4 border-t border-cream-50/10">
                <p className="text-cream-50 text-xs uppercase tracking-widest font-medium">
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