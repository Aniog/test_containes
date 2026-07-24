import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function StarRow() {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={13} className="fill-champagne text-champagne" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-ultra-wide uppercase text-champagne mb-2">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-obsidian font-light">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="flex flex-col gap-4 p-8 bg-parchment border border-parchment-dark"
            >
              <StarRow />
              <p className="font-serif text-lg text-obsidian leading-relaxed italic font-light">
                "{t.text}"
              </p>
              <div className="hairline pt-4 mt-auto">
                <p className="font-sans text-xs tracking-widest uppercase text-warm-gray">
                  — {t.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
