import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophie M.',
    rating: 5,
    text: 'I bought the Vivid Aura ear cuff for myself and immediately ordered two more as gifts. The quality is incredible for the price — it looks so much more expensive than it is.',
    product: 'Vivid Aura Jewels',
  },
  {
    id: 2,
    name: 'Camille R.',
    rating: 5,
    text: 'The Royal Heirloom Set arrived in the most beautiful packaging. My sister cried when she opened it. Velmora has a customer for life.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Isabelle T.',
    rating: 5,
    text: 'I wear the Golden Sphere Huggies every single day. They haven\'t tarnished at all after 3 months of daily wear. Absolutely obsessed.',
    product: 'Golden Sphere Huggies',
  },
];

function StarRating({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="text-velmora-gold fill-velmora-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-widest-xl font-sans text-velmora-gold mb-3">
            What They Say
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-ink">
            Loved by Thousands
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-velmora-surface border border-velmora-border p-8 flex flex-col gap-5"
            >
              <StarRating count={review.rating} />
              <blockquote className="font-serif text-lg font-light text-velmora-ink leading-relaxed italic flex-1">
                "{review.text}"
              </blockquote>
              <div className="divider" />
              <div>
                <p className="text-xs uppercase tracking-widest font-sans font-semibold text-velmora-ink">
                  {review.name}
                </p>
                <p className="text-xs text-velmora-muted font-sans mt-0.5">
                  Purchased: {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} className="text-velmora-gold fill-velmora-gold" />
            ))}
          </div>
          <p className="text-sm text-velmora-muted font-sans">
            <span className="font-semibold text-velmora-ink">4.8 out of 5</span> · Based on 524 reviews
          </p>
        </div>
      </div>
    </section>
  );
}
