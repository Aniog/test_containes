import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28">
      <div className="text-center mb-14">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wider text-velvet-900">
          What Our Customers Say
        </h2>
        <hr className="hairline-divider w-16 mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {testimonials.map((t) => (
          <blockquote key={t.id} className="text-center px-4">
            <div className="flex justify-center gap-0.5 mb-5">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-velvet-600 leading-relaxed italic font-light">
              "{t.text}"
            </p>
            <footer className="mt-6">
              <cite className="not-italic text-xs tracking-wider uppercase text-velvet-900 font-medium">
                {t.name}
              </cite>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
