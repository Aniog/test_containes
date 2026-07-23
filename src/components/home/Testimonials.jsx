import { StarRating } from '@/components/ui/StarRating';

const REVIEWS = [
  {
    id: 1,
    name: 'Sarah L.',
    text: 'The quality exceeded my expectations. I wear my Golden Sphere Huggies every single day and they still look brand new.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jenny M.',
    text: 'Bought the Royal Heirloom Set as a birthday gift and my sister cried. The packaging alone feels like a luxury experience.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amara K.',
    text: 'Quiet luxury at a price that feels fair. The ear cuff is genius — no piercing needed and it stays put all day.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-sand/30 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Reviews
          </p>
          <h2 className="font-playfair text-3xl font-medium text-espresso md:text-4xl">
            Loved by Our Community
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <StarRating rating={review.rating} />
              <p className="mt-5 font-sans text-sm font-light leading-relaxed text-espresso">
                "{review.text}"
              </p>
              <p className="mt-5 font-sans text-xs font-semibold uppercase tracking-wider text-taupe">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
