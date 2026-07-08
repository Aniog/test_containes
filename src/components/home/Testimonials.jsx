import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="section-padding py-16 md:py-24 bg-cream-50">
      <div className="text-center mb-12">
        <h2 className="heading-lg text-dark-900 mb-3">What Our Customers Say</h2>
        <p className="body-md text-dark-600">Trusted by thousands of women worldwide.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-cream-100 p-6 md:p-8 border border-stone-200">
            <Quote size={24} className="text-gold-400 mb-4" />
            <p className="body-md text-dark-700 mb-6 italic leading-relaxed">
              "{t.text}"
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-sans text-sm font-medium text-dark-900">{t.name}</p>
                <div className="flex items-center gap-0.5 mt-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={12} className="text-gold-500 fill-gold-500" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
