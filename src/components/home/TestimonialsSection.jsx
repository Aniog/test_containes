import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-manrope text-xs uppercase tracking-widest text-gold mb-3">
            Customer Love
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ink">
            What They're Saying
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-cormorant text-xl md:text-2xl font-light italic text-ink leading-relaxed mb-6 flex-1">
                "{t.text}"
              </blockquote>

              {/* Divider */}
              <div className="w-8 h-px bg-gold mb-5" />

              {/* Attribution */}
              <div>
                <p className="font-manrope text-xs uppercase tracking-widest text-ink font-medium">
                  {t.name}
                </p>
                <p className="font-manrope text-xs text-whisper mt-0.5">
                  Purchased: {t.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
