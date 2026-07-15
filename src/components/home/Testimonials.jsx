import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest3 uppercase text-champagne mb-3">Reviews</p>
          <h2 className="font-serif text-4xl md:text-5xl text-velvet font-light">What They're Saying</h2>
          <div className="w-12 h-px bg-champagne mx-auto mt-5" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="bg-cream p-8 md:p-10 flex flex-col gap-5">
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} fill="#C9A96E" className="text-champagne" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg md:text-xl text-velvet font-light leading-relaxed italic flex-1">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-blush">
                <div className="w-8 h-8 rounded-full bg-blush flex items-center justify-center">
                  <span className="font-serif text-sm text-champagne">{t.name[0]}</span>
                </div>
                <span className="font-sans text-xs tracking-wide text-stone uppercase">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
