import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophie M.',
    rating: 5,
    text: 'I wear these huggies every single day. They haven\'t tarnished at all and I get compliments constantly. Worth every penny.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Claire W.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. Absolutely stunning quality.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Maya R.',
    rating: 5,
    text: 'The Vivid Aura ear cuff is unlike anything I\'ve seen at this price point. It looks so expensive and sits perfectly. Obsessed.',
    product: 'Vivid Aura Jewels',
  },
];

function Stars({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3 h-3" style={{ fill: '#C9A96E', color: '#C9A96E' }} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velvet">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-14">
          <p className="font-manrope text-xs font-medium tracking-widest uppercase text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-parchment tracking-wide">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map(review => (
            <div
              key={review.id}
              className="bg-espresso border border-stone/10 p-8 md:p-10"
            >
              <Stars count={review.rating} />
              <blockquote className="font-cormorant text-xl font-light italic text-parchment leading-relaxed mt-5 mb-6">
                "{review.text}"
              </blockquote>
              <div className="border-t border-stone/20 pt-5">
                <p className="font-manrope text-xs font-semibold tracking-widest uppercase text-gold">
                  {review.name}
                </p>
                <p className="font-manrope text-xs text-stone/60 mt-1">
                  Verified purchase · {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
