import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophia M.',
    rating: 5,
    text: "I wear the Vivid Aura cuff every single day. It's the first thing I put on in the morning. The quality is incredible for the price — it hasn't tarnished at all after 6 months.",
    product: 'Vivid Aura Jewels',
  },
  {
    id: 2,
    name: 'Claire W.',
    rating: 5,
    text: "Bought the Royal Heirloom Set as a birthday gift for my sister and she absolutely loved it. The packaging is so luxurious — it felt like a high-end boutique experience.",
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Maya R.',
    rating: 5,
    text: "The Golden Sphere Huggies are perfection. They sit so close to the ear and look incredibly chic. I've gotten so many compliments. Already ordered two more pairs as gifts.",
    product: 'Golden Sphere Huggies',
  },
];

function StarRating({ count = 5 }) {
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
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-obsidian">
            What They're Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-parchment p-8 border border-stone/10 flex flex-col gap-4"
            >
              <StarRating count={review.rating} />
              <p className="font-serif text-base md:text-lg font-light text-obsidian leading-relaxed italic flex-1">
                "{review.text}"
              </p>
              <div className="pt-4 border-t border-stone/15">
                <p className="font-sans text-xs tracking-widest uppercase text-obsidian font-medium">
                  {review.name}
                </p>
                <p className="font-sans text-xs text-mist mt-0.5">
                  Verified Purchase · {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate rating */}
        <div className="flex flex-col items-center mt-12 gap-2">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="#C9A96E" stroke="none" />
            ))}
          </div>
          <p className="font-sans text-xs text-mist tracking-wide">
            4.8 out of 5 · Based on 524 reviews
          </p>
        </div>
      </div>
    </section>
  );
}
