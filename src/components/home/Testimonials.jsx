import { StarRating } from '@/components/ui/StarRating';

const testimonials = [
  {
    id: 1,
    name: 'Claire M.',
    text: 'The quality is stunning for the price. I wear my Golden Sphere Huggies almost every day and they still look brand new.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya S.',
    text: 'Beautiful packaging and even more beautiful jewelry. It felt like receiving a luxury gift — even though it was for myself.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma T.',
    text: 'I get compliments constantly. The Amber Lace Earrings are delicate but make such a statement.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs uppercase tracking-widest text-warmGray">Reviews</p>
          <h2 className="heading-md">Loved by Our Customers</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="border border-taupe/60 bg-cream p-8 text-center transition-shadow duration-300 hover:shadow-md"
            >
              <StarRating rating={t.rating} size={16} />
              <p className="mt-5 font-serif text-lg italic leading-relaxed text-ink">“{t.text}”</p>
              <p className="mt-6 text-xs font-medium uppercase tracking-widest text-warmGray">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
