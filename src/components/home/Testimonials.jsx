import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function StarRating({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} fill="#C9A96E" stroke="none" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">Reviews</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-ink font-light">What They're Saying</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map(t => (
            <div key={t.id} className="flex flex-col">
              <StarRating count={t.rating} />
              <blockquote className="font-serif text-lg lg:text-xl text-ink font-light italic leading-relaxed mt-4 flex-1">
                "{t.text}"
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-linen flex items-center justify-center">
                  <span className="font-serif text-sm text-stone">{t.name[0]}</span>
                </div>
                <span className="font-sans text-xs tracking-wider text-mist uppercase">{t.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-16 h-px bg-linen" />
      </div>
    </section>
  );
}
