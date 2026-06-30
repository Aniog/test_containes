import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto section-padding">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-label text-brand mb-3">What They Say</p>
          <h2 className="heading-serif text-3xl lg:text-4xl text-charcoal-800">
            Loved by Thousands
          </h2>
          <div className="w-12 h-[1px] bg-brand mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-cream-50 border border-cream-300/50 p-8 lg:p-10 text-center"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gold-300 mx-auto mb-4">
                <path d="M10 8c-1.1 0-2 .9-2 2v6h6v-6h-2c0-1.1-.9-2-2-2zm8 0c-1.1 0-2 .9-2 2v6h6v-6h-2c0-1.1-.9-2-2-2z" fill="currentColor"/>
              </svg>
              <div className="flex items-center justify-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="#C9A84C" className="text-brand" />
                ))}
              </div>
              <p className="text-sm text-charcoal-600 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-serif text-base font-semibold text-charcoal-800">{t.name}</p>
                <p className="text-xs text-charcoal-400 mt-0.5">Purchased: {t.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
