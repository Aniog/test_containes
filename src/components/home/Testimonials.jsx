import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophia R.',
    rating: 5,
    text: "I bought the Vivid Aura ear cuff for myself and it\u2019s become my everyday piece. The quality is incredible for the price \u2014 it looks so much more expensive than it is.",
    product: 'Vivid Aura Jewels',
  },
  {
    id: 2,
    name: 'Camille D.',
    rating: 5,
    text: 'Gifted the Royal Heirloom Set to my sister for her birthday and she cried. The packaging alone is worth it. Will be ordering again.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Isabelle M.',
    rating: 5,
    text: "The Golden Sphere Huggies are perfect. They hug my ear beautifully and I\u2019ve worn them every day for three months without any tarnishing. Genuinely impressed.",
    product: 'Golden Sphere Huggies',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 md:py-28 border-t border-linen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink mb-4">What She Said</h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map(review => (
            <div key={review.id} className="bg-parchment p-8 border border-linen relative">
              {/* Quote mark */}
              <span className="font-serif text-6xl text-gold/20 absolute top-4 left-6 leading-none select-none">"</span>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5" fill="#C9A96E" stroke="#C9A96E" />
                ))}
              </div>

              <p className="font-sans text-sm text-ink-muted leading-relaxed mb-6 relative z-10">
                "{review.text}"
              </p>

              <div className="border-t border-linen pt-4">
                <p className="font-serif text-base text-ink">{review.name}</p>
                <p className="font-sans text-xs text-ink-faint uppercase tracking-wider mt-0.5">
                  {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
