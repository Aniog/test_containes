import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophie M.',
    rating: 5,
    text: 'I bought the Golden Sphere Huggies and I haven\'t taken them off since. The quality is incredible for the price — they look and feel so luxurious.',
  },
  {
    id: 2,
    name: 'Claire W.',
    rating: 5,
    text: 'Ordered the Royal Heirloom Set as a birthday gift for my best friend. The packaging alone made her cry. She wears it every single day.',
  },
  {
    id: 3,
    name: 'Priya K.',
    rating: 5,
    text: 'Finally found a jewelry brand that delivers on its promises. The gold hasn\'t tarnished after 6 months of daily wear. Absolutely obsessed.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream border-t border-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-manrope text-xs tracking-widest uppercase text-gold mb-2">Reviews</p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-ink font-light">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className="fill-current text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-cormorant text-xl text-ink font-light leading-relaxed italic flex-1 mb-5">
                "{review.text}"
              </p>

              {/* Divider */}
              <div className="w-6 h-px bg-gold mb-4" />

              {/* Name */}
              <p className="font-manrope text-xs tracking-widest uppercase text-ink-muted">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
