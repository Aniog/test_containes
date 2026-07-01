import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophie M.',
    rating: 5,
    text: 'I bought the Vivid Aura ear cuff for myself as a treat and I haven\'t taken it off since. The quality is incredible for the price — it looks and feels like fine jewelry.',
  },
  {
    id: 2,
    name: 'Claire W.',
    rating: 5,
    text: 'Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — delicate but substantial. Will be ordering again.',
  },
  {
    id: 3,
    name: 'Maya R.',
    rating: 5,
    text: 'The Golden Sphere Huggies are my new everyday earrings. They\'re the perfect weight, the gold tone is warm and rich, and they haven\'t tarnished at all after 3 months of daily wear.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl text-obsidian font-light">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="#C9A96E" stroke="none" />
            ))}
            <span className="font-sans text-xs text-muted ml-2">4.8 · 524 reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map(review => (
            <div
              key={review.id}
              className="bg-parchment p-7 md:p-8 border border-divider hover:border-gold/30 transition-colors duration-300"
            >
              <div className="flex gap-0.5 mb-5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={12} fill="#C9A96E" stroke="none" />
                ))}
              </div>
              <p className="font-serif text-base md:text-lg text-obsidian leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <p className="font-sans text-xs tracking-widest uppercase text-muted">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
