import { StarRating } from '@/components/ui/StarRating';

const reviews = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'The quality is incredible for the price. My huggies have become my everyday signature.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Elena R.',
    text: 'Bought the Royal Heirloom Set as a gift and ended up ordering one for myself. Beautiful packaging.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jenna K.',
    text: 'Finally, demi-fine jewelry that feels premium without the markup. Fast shipping too.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-velmora-bg py-16 md:py-24">
      <div className="px-5 md:px-8 lg:px-12 xl:px-16">
        <h2 className="mb-10 md:mb-14 font-serif text-3xl md:text-4xl text-center text-velmora-text">
          Loved by You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border border-velmora-hairline bg-velmora-surface p-8 md:p-10"
            >
              <StarRating rating={review.rating} size={14} className="mb-5" />
              <p className="font-serif text-lg md:text-xl italic leading-relaxed text-velmora-text">
                “{review.text}”
              </p>
              <p className="mt-6 font-sans text-xs uppercase tracking-widest text-velmora-muted">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
