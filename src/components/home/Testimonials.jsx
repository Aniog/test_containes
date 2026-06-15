import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function StarRating({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-3">Reviews</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-velvet font-light">What They're Saying</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map(t => (
            <div key={t.id} className="bg-ivory p-8 lg:p-10 relative">
              {/* Decorative quote mark */}
              <span className="font-serif text-6xl text-gold/20 leading-none absolute top-4 left-6 select-none">"</span>

              <StarRating count={t.rating} />

              <p className="font-serif text-lg text-charcoal leading-relaxed mt-5 mb-6 italic">
                "{t.text}"
              </p>

              <div className="border-t border-mist pt-5">
                <p className="font-sans text-sm text-velvet font-medium">{t.name}</p>
                <p className="font-sans text-xs text-stone mt-0.5">{t.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 border-t border-mist pt-12">
          {[
            { value: '10,000+', label: 'Happy Customers' },
            { value: '4.9★', label: 'Average Rating' },
            { value: '98%', label: 'Would Recommend' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl lg:text-4xl text-gold font-light">{stat.value}</p>
              <p className="font-sans text-xs text-stone tracking-widest uppercase mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
