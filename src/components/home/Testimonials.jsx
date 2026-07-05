import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function StarRating({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} fill="#C9A96E" className="text-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-3 font-medium">Reviews</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-parchment font-light">What They're Saying</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-charcoal border border-mink/40 p-8 hover:border-gold/30 transition-colors duration-300"
            >
              <StarRating count={t.rating} />
              <blockquote className="mt-5 mb-6">
                <p className="font-serif text-lg text-parchment/90 font-light leading-relaxed italic">
                  "{t.text}"
                </p>
              </blockquote>
              <div className="border-t border-mink/40 pt-5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-parchment font-medium">{t.name}</p>
                  <p className="text-[10px] text-stone mt-0.5">Verified Purchase</p>
                </div>
                <p className="text-[9px] tracking-wide text-gold/60 uppercase">{t.product}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 border border-mink/40 px-8 py-4">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="#C9A96E" className="text-gold" />
              ))}
            </div>
            <div className="w-px h-6 bg-mink/60" />
            <p className="text-sm text-parchment">
              <span className="font-medium">4.8</span>
              <span className="text-stone ml-1">/ 5 from 639 reviews</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
