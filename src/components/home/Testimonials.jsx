import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-ivory-50">
      <div className="max-w-[1440px] mx-auto section-padding">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-heading text-3xl sm:text-4xl md:text-5xl text-velvet-950 mb-3">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 rounded-sm border border-velvet-100 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < t.rating ? 'text-gold-400 fill-gold-400' : 'text-velvet-200'
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-obsidian-light leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-velvet-950">{t.name}</p>
                  <p className="text-[11px] text-obsidian-muted mt-0.5">
                    on {t.product}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
