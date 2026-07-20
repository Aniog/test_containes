import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophia R.',
    rating: 5,
    text: 'I bought the Vivid Aura cuff for myself and immediately ordered two more as gifts. The quality is incredible for the price — it looks and feels like fine jewelry.',
  },
  {
    id: 2,
    name: 'Maya L.',
    rating: 5,
    text: 'The Flora Nectar necklace is absolutely stunning. I get compliments every single time I wear it. Packaging was beautiful too — perfect for gifting.',
  },
  {
    id: 3,
    name: 'Claire M.',
    rating: 5,
    text: 'Ordered the Royal Heirloom Set for my sister\'s birthday. She cried when she opened it. The gift box is so elegant. Will be a repeat customer forever.',
  },
];

const StarRating = ({ rating }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${i < rating ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-gold/30'}`}
        strokeWidth={1}
      />
    ))}
  </div>
);

const TestimonialsSection = () => (
  <section className="py-20 md:py-28 bg-velmora-cream">
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
      <div className="text-center mb-14">
        <p className="font-inter text-xs tracking-[0.2em] uppercase text-velmora-gold mb-3">
          Customer Love
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-ink tracking-wide">
          What They're Saying
        </h2>
        <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex flex-col gap-5 p-8 bg-velmora-stone border border-velmora-gold/15"
          >
            <StarRating rating={review.rating} />
            <p className="font-cormorant text-lg font-light italic text-velmora-charcoal leading-relaxed flex-1">
              "{review.text}"
            </p>
            <div className="border-t border-velmora-gold/20 pt-4">
              <p className="font-inter text-xs tracking-[0.1em] uppercase text-velmora-muted">
                — {review.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
