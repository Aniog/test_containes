import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-xs tracking-super uppercase text-sand-600 font-medium mb-3">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velvet-900 font-light">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="text-center px-4">
              <div className="flex items-center justify-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }, (_, i) => (
                  <Star key={i} className="w-4 h-4 text-sand-500 fill-sand-500" />
                ))}
              </div>
              <p className="text-velvet-600 italic leading-relaxed mb-5 text-sm">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-serif text-lg text-velvet-900">
                {t.name} {t.initial}.
              </p>
            </div>
          ))}
        </div>

        {/* Aggregate rating */}
        <div className="flex items-center justify-center gap-3 mt-12 pt-8 border-t border-velvet-100">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className="w-3.5 h-3.5 text-sand-500 fill-sand-500" />
            ))}
          </div>
          <span className="text-sm text-velvet-600">
            Rated 4.8/5 by <span className="font-medium">500+</span> customers
          </span>
        </div>
      </div>
    </section>
  );
}
