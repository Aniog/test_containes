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
    name: 'Isabelle R.',
    rating: 5,
    text: 'Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. Absolutely stunning pieces, will be ordering again.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Camille T.',
    rating: 5,
    text: 'The Majestic Flora Nectar necklace is everything. I get compliments every single time I wear it. Velmora has a customer for life.',
    product: 'Majestic Flora Nectar',
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs text-gold tracking-ultra-wide uppercase mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-obsidian font-light">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-cream p-8 md:p-10 border border-linen flex flex-col"
            >
              <Stars count={review.rating} />
              <p className="font-serif text-lg md:text-xl text-obsidian font-light leading-relaxed italic flex-1 mb-6">
                "{review.text}"
              </p>
              <div className="border-t border-linen pt-5">
                <p className="font-sans text-xs text-obsidian tracking-widest uppercase font-500">
                  {review.name}
                </p>
                <p className="font-sans text-xs text-pebble mt-1">
                  Verified Purchase · {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
