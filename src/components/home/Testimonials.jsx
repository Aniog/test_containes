import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophia M.',
    rating: 5,
    text: 'I bought the Amber Lace Earrings for my birthday and I haven\'t taken them off since. The quality is incredible for the price — they look so much more expensive than they are.',
    product: 'Amber Lace Earrings',
  },
  {
    id: 2,
    name: 'Emma R.',
    rating: 5,
    text: 'Ordered the Royal Heirloom Set as a gift for my sister and she absolutely loved it. The packaging is beautiful and the jewelry is stunning. Will definitely be ordering again.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Isabelle C.',
    rating: 5,
    text: 'The Golden Sphere Huggies are perfect. They hug my ear exactly right and the gold tone is so warm and rich. I get compliments every time I wear them.',
    product: 'Golden Sphere Huggies',
  },
];

function StarRow({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} fill="#C9A96E" stroke="none" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-manrope text-[10px] uppercase tracking-widest-xl text-velmora-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-velmora-cream border border-velmora-sand p-8 flex flex-col gap-4"
            >
              <StarRow count={review.rating} />
              <p className="font-cormorant text-lg font-light text-velmora-text-dark leading-relaxed italic flex-1">
                "{review.text}"
              </p>
              <div className="border-t border-velmora-sand pt-4">
                <p className="font-manrope text-xs font-medium text-velmora-obsidian">
                  {review.name}
                </p>
                <p className="font-manrope text-[10px] text-velmora-text-muted mt-0.5">
                  Verified Purchase · {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3">
            <StarRow count={5} />
            <span className="font-manrope text-xs text-velmora-text-mid">
              4.8 average · 500+ reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
