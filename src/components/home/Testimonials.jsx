import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="bg-obsidian py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-widest text-gold mb-3">
            What They Say
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ivory">
            Loved by Thousands
          </h2>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(review => (
            <div
              key={review.id}
              className="border border-stone/40 p-8 flex flex-col gap-5 hover:border-gold/40 transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={13} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg font-light text-ivory leading-relaxed italic flex-1">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-stone/30">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="font-serif text-sm text-gold font-medium">
                    {review.author.charAt(0)}
                  </span>
                </div>
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-ivory-muted">
                  {review.author}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust numbers */}
        <div className="mt-16 pt-12 border-t border-stone/30 grid grid-cols-3 gap-6 text-center">
          {[
            { value: '50,000+', label: 'Happy Customers' },
            { value: '4.9★', label: 'Average Rating' },
            { value: '98%', label: 'Would Recommend' },
          ].map(stat => (
            <div key={stat.label}>
              <p className="font-serif text-3xl md:text-4xl font-light text-gold mb-2">{stat.value}</p>
              <p className="font-sans text-[11px] uppercase tracking-widest text-ivory-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
