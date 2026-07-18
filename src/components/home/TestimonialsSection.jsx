import { testimonials } from '@/data/products';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
      <div className="text-center mb-14">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wider">
          From Our Clients
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {testimonials.map((t) => (
          <div key={t.id} className="text-center flex flex-col items-center">
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed italic max-w-xs">
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="mt-5 text-xs tracking-[0.08em] uppercase font-medium">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
