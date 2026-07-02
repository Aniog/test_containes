import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-8xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs uppercase tracking-[0.15em] text-stone">Kind words</span>
          <h2 className="font-serif text-3xl md:text-4xl mt-2 text-foreground">Loved by Thousands</h2>
          <div className="w-12 h-px bg-accent mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card p-6 md:p-8 rounded-sm border border-border"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }, (_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-stone leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Name */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <span className="font-serif text-sm text-stone">{t.name.charAt(0)}</span>
                </div>
                <span className="text-sm font-medium">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}