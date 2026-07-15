import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="section-padding bg-velvet-card">
      <div className="container-wide">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velvet-base mb-3">Loved by You</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-velvet-accent text-velvet-accent" />
                ))}
              </div>
              <p className="text-velvet-base leading-relaxed text-sm italic mb-5">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-serif text-sm tracking-wider text-velvet-muted uppercase">
                {t.name} {t.initial}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
