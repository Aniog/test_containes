import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophie M.',
    rating: 5,
    text: 'I bought the Golden Sphere Huggies and I haven\'t taken them off since. The quality is incredible for the price — they look and feel so luxurious.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Claire W.',
    rating: 5,
    text: 'Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. Absolutely stunning pieces, will be ordering again.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Priya S.',
    rating: 5,
    text: 'The Majestic Flora Nectar necklace is everything. I get compliments every single time I wear it. Fast shipping, beautiful packaging, perfect quality.',
    product: 'Majestic Flora Nectar',
  },
];

function StarRow({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={12}
          strokeWidth={1}
          style={{ color: '#C9A96E', fill: '#C9A96E' }}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="text-xs font-sans tracking-widest uppercase text-gold mb-2 font-medium">
            Reviews
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-obsidian">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {reviews.map((review) => (
            <div key={review.id} className="bg-linen p-8 border border-sand">
              <StarRow count={review.rating} />
              <p className="font-display text-lg italic text-obsidian leading-relaxed mb-6">
                "{review.text}"
              </p>
              <div className="divider mb-4" />
              <div className="flex items-center justify-between">
                <span className="text-xs font-sans font-medium text-obsidian tracking-wide">
                  {review.name}
                </span>
                <span className="text-[10px] font-sans text-muted tracking-widest uppercase">
                  {review.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
