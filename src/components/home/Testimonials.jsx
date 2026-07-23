import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          style={i < count
            ? { fill: 'rgb(201,169,110)', color: 'rgb(201,169,110)' }
            : { fill: 'rgb(232,224,212)', color: 'rgb(232,224,212)' }
          }
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <p className="font-sans text-xs uppercase tracking-widest text-gold mb-3 font-medium">Reviews</p>
          <h2 className="font-serif text-4xl md:text-5xl text-dusk font-light">Loved by Thousands</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map(t => (
            <div key={t.id} className="flex flex-col gap-5 p-8 bg-parchment border border-stone">
              <StarRating count={t.rating} />
              <p className="font-serif text-lg text-dusk font-light leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="mt-auto pt-4 border-t border-stone">
                <p className="font-sans text-xs uppercase tracking-widest text-umber font-semibold">
                  — {t.name}
                </p>
                <p className="font-sans text-xs text-stone mt-1">Verified Purchase</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
