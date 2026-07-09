import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophie L.',
    rating: 5,
    text: 'Absolutely stunning. The quality is incredible for the price — I get compliments every single time I wear the Amber Lace earrings.',
  },
  {
    id: 2,
    name: 'Mia R.',
    rating: 5,
    text: 'Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. Will be ordering again.',
  },
  {
    id: 3,
    name: 'Camille T.',
    rating: 5,
    text: 'I was skeptical about gold-plated jewelry but these have held up beautifully for months. Truly demi-fine quality.',
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} strokeWidth={1} style={{ color: '#C9A96E', fill: '#C9A96E' }} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-parchment py-20 lg:py-24 border-t border-divider">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold mb-2">
            What Our Customers Say
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-ink">
            Loved & Worn
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col gap-4">
              <Stars count={review.rating} />
              <p className="font-serif text-lg font-light text-ink leading-relaxed italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-divider">
                <div className="w-8 h-8 rounded-full bg-linen flex items-center justify-center">
                  <span className="font-serif text-sm text-mist">{review.name[0]}</span>
                </div>
                <span className="font-sans text-xs uppercase tracking-[0.15em] text-mist">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="flex items-center justify-center gap-3 mt-14 pt-10 border-t border-divider">
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map((s) => (
              <Star key={s} size={16} strokeWidth={1} style={{ color: '#C9A96E', fill: '#C9A96E' }} />
            ))}
          </div>
          <span className="font-serif text-2xl font-light text-ink">4.8</span>
          <span className="font-sans text-xs text-mist uppercase tracking-[0.1em]">
            from 524 reviews
          </span>
        </div>
      </div>
    </section>
  );
}
