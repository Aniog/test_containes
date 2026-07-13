import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophia R.',
    rating: 5,
    text: 'I bought the Amber Lace earrings for myself as a birthday treat and I haven\'t taken them off since. The quality is incredible for the price — they feel genuinely luxurious.',
    product: 'Amber Lace Earrings',
  },
  {
    id: 2,
    name: 'Mia T.',
    rating: 5,
    text: 'Ordered the Royal Heirloom Set as a gift for my sister and she absolutely loved it. The packaging is beautiful and the jewelry itself is stunning. Will definitely be ordering again.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Elena K.',
    rating: 5,
    text: 'The Golden Sphere Huggies are my new everyday earrings. They\'re the perfect weight — substantial enough to feel special but light enough to forget you\'re wearing them.',
    product: 'Golden Sphere Huggies',
  },
];

function StarRow({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} style={{ color: '#C9A96E', fill: '#C9A96E' }} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-obsidian">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[10px] tracking-widest-xl uppercase text-velmora-gold mb-3">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-linen tracking-wide">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-velmora-charcoal border border-velmora-stone p-8 flex flex-col"
            >
              <StarRow count={review.rating} />
              <blockquote className="mt-5 font-serif text-base italic text-velmora-sand leading-relaxed flex-1">
                "{review.text}"
              </blockquote>
              <div className="mt-6 pt-5 border-t border-velmora-stone">
                <p className="text-xs font-semibold tracking-widest uppercase text-velmora-linen">
                  {review.name}
                </p>
                <p className="text-[10px] text-velmora-ash mt-0.5 tracking-wide">{review.product}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate rating */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((s) => (
                <Star key={s} size={14} style={{ color: '#C9A96E', fill: '#C9A96E' }} />
              ))}
            </div>
            <span className="text-sm text-velmora-sand">4.8 out of 5 · 524 reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
