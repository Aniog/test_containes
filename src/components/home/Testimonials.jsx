import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="section-padding bg-cream-50">
      <div className="container-page max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-900 mb-16">
          Loved by Women Everywhere
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-velvet-500 text-velvet-500" />
                ))}
              </div>
              <blockquote className="text-charcoal-600 text-sm leading-relaxed italic mb-5">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <p className="font-serif text-sm text-charcoal-900">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}