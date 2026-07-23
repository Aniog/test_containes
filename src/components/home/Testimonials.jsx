import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophia M.',
    rating: 5,
    text: 'I wear the Vivid Aura cuff every single day. It hasn\'t tarnished at all after 3 months. The quality is genuinely impressive for the price point.',
    product: 'Vivid Aura Jewels',
  },
  {
    id: 2,
    name: 'Claire W.',
    rating: 5,
    text: 'Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. Absolutely stunning pieces — she hasn\'t taken them off.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Maya R.',
    rating: 5,
    text: 'The Golden Sphere Huggies are exactly what I\'ve been looking for. Chunky but elegant, they go with everything. Already ordered a second pair.',
    product: 'Golden Sphere Huggies',
  },
];

function StarRow({ count }) {
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
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-sans uppercase tracking-widest text-gold mb-3">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-obsidian">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <StarRow count={5} />
            <span className="text-xs font-sans text-taupe">4.9 average · 400+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-ivory-dark p-8 flex flex-col gap-4 border border-ivory-dark hover:border-gold/30 transition-colors duration-300"
            >
              <StarRow count={review.rating} />
              <p className="font-serif text-base font-light text-obsidian leading-relaxed italic">
                "{review.text}"
              </p>
              <div className="mt-auto pt-4 border-t border-ivory hairline">
                <p className="text-xs font-sans font-medium text-obsidian">{review.name}</p>
                <p className="text-[10px] font-sans text-taupe mt-0.5">Verified · {review.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
