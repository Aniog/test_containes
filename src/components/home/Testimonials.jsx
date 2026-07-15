import { StarRating } from '../ui/StarRating';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is incredible for the price. I wear my huggies every single day and they still look brand new.',
  },
  {
    id: 2,
    name: 'Julia K.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a birthday gift and she absolutely loved it. The packaging felt so premium.',
  },
  {
    id: 3,
    name: 'Emily R.',
    rating: 5,
    text: 'Quiet luxury exactly as described. Minimal, elegant, and perfect for layering. Already ordering more.',
  },
];

export function Testimonials() {
  return (
    <section className="bg-velmora-cream py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-velmora-gold">
            Reviews
          </p>
          <h2 className="mt-3 font-serif text-3xl text-velmora-ink sm:text-4xl">
            Loved by Our Customers
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="border border-velmora-sand bg-white p-8 transition-shadow duration-300 hover:shadow-lg"
            >
              <StarRating rating={item.rating} size={14} />
              <p className="mt-5 font-serif text-lg italic leading-relaxed text-velmora-ink">
                "{item.text}"
              </p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-velmora-taupe">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
