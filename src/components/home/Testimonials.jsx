import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

function StarRow({ count }) {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          strokeWidth={1}
          color={i < count ? '#C9A96E' : '#E8DFD0'}
          fill={i < count ? '#C9A96E' : 'none'}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-velmora-gold mb-3">
            What They Say
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-ink tracking-wide">
            Loved by Thousands
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(review => (
            <div key={review.id} className="flex flex-col">
              <StarRow count={review.rating} />
              <blockquote className="font-serif text-lg md:text-xl font-light italic text-velmora-ink leading-relaxed flex-1 mb-5">
                "{review.text}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-velmora-sand flex items-center justify-center">
                  <span className="font-serif text-sm font-medium text-velmora-muted">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <span className="text-xs font-medium tracking-[0.1em] uppercase text-velmora-muted">
                  {review.name}
                </span>
                <span className="text-xs text-velmora-subtle">· Verified Buyer</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
