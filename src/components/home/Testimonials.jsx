import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

function StarRow() {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={12} className="text-gold fill-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-ivory border-t border-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs uppercase tracking-widest-xl text-gold mb-2">Reviews</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ink">What They're Saying</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`flex flex-col ${i === 1 ? 'md:border-x border-sand md:px-10' : ''}`}
            >
              <StarRow />
              <blockquote className="font-serif text-lg md:text-xl font-light text-ink leading-relaxed mb-6 flex-1">
                "{t.text}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-linen border border-sand flex items-center justify-center">
                  <span className="font-serif text-sm text-muted">{t.name[0]}</span>
                </div>
                <span className="font-sans text-xs font-medium text-stone uppercase tracking-widest-sm">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust stats */}
        <div className="mt-16 pt-12 border-t border-sand grid grid-cols-3 gap-6 text-center">
          {[
            { value: '4.9★', label: 'Average Rating' },
            { value: '12,000+', label: 'Happy Customers' },
            { value: '98%', label: 'Would Recommend' },
          ].map(stat => (
            <div key={stat.label}>
              <p className="font-serif text-3xl md:text-4xl font-light text-gold mb-1">{stat.value}</p>
              <p className="font-sans text-xs uppercase tracking-widest-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
