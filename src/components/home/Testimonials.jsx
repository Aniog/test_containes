import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs tracking-widest-xl uppercase text-gold-500 mb-3 font-medium">
            Love Letters
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-800" style={{ fontWeight: 400 }}>
            What Our Customers Say
          </h2>
          <div className="hairline max-w-24 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-cream-100 p-8 md:p-10 border border-gold-200/20 hover:border-gold-300/30 transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }, (_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
                ))}
              </div>
              <p className="text-charcoal-600 text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs tracking-wider uppercase text-charcoal-400 font-medium">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
