import { StarRating } from '@/components/ui/StarRating';

const REVIEWS = [
  {
    id: 1,
    name: 'Amelia K.',
    text: 'The quality is stunning for the price. I wear my huggies every single day and they still look brand new.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah M.',
    text: 'Bought the Royal Heirloom Set as a birthday gift and she absolutely loved it. Packaging was gorgeous too.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jessica T.',
    text: 'Quiet luxury exactly as described. The ear cuff is so comfortable and gets compliments constantly.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-velmora-cream-dark px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="mb-3 block font-sans text-xs font-medium uppercase tracking-[0.28em] text-velmora-gold">
            Reviews
          </span>
          <h2 className="font-serif text-4xl text-velmora-base sm:text-5xl">
            From Our Community
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="border border-velmora-base/10 bg-velmora-cream p-8 transition-shadow duration-300 hover:shadow-soft"
            >
              <StarRating rating={review.rating} showCount={false} />
              <p className="mt-5 font-sans text-sm leading-relaxed text-velmora-base">
                “{review.text}”
              </p>
              <p className="mt-5 font-sans text-xs font-semibold uppercase tracking-widest text-velmora-taupe">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
