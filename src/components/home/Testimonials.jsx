import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

function StarRow() {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={12} strokeWidth={1} style={{ fill: '#C9A96E', color: '#C9A96E' }} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-espresso">
            Loved by Thousands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div key={t.id} className="flex flex-col">
              <StarRow />
              <blockquote className="font-serif text-lg font-light text-espresso leading-relaxed italic flex-1">
                "{t.text}"
              </blockquote>
              <div className="mt-6 pt-6 border-t border-linen">
                <p className="font-sans text-xs uppercase tracking-widest text-taupe">
                  — {t.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-10 border-t border-linen flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[1,2,3,4,5].map(i => <Star key={i} size={14} strokeWidth={1} style={{ fill: '#C9A96E', color: '#C9A96E' }} />)}
            </div>
            <span className="font-sans text-sm text-espresso font-medium">4.9/5</span>
            <span className="font-sans text-xs text-taupe">from 2,400+ reviews</span>
          </div>
          <div className="w-px h-6 bg-linen hidden md:block" />
          <p className="font-sans text-xs text-taupe uppercase tracking-widest">
            Verified Customer Reviews
          </p>
        </div>
      </div>
    </section>
  );
}
