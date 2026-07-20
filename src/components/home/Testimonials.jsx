import StarRating from '@/components/ui/StarRating.jsx';

const testimonials = [
  {
    id: 1,
    name: 'Sophie M.',
    text: 'The quality is stunning — I wear my Golden Sphere Huggies every single day and they still look brand new.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Danielle K.',
    text: 'Bought the Royal Heirloom Set as a birthday gift and she absolutely loved it. The packaging felt so premium.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amara T.',
    text: 'Quiet luxury at an accessible price. I have received so many compliments on the Amber Lace Earrings.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 text-center md:mb-14">
          <p className="text-xs uppercase tracking-brand text-accent">
            From Our Community
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
            Loved by You
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="border border-subtle bg-cream p-8 text-center transition-transform duration-300 hover:-translate-y-1"
            >
              <StarRating rating={t.rating} size={14} />
              <p className="mt-5 font-serif text-lg italic leading-relaxed text-foreground">
                “{t.text}”
              </p>
              <p className="mt-5 text-xs uppercase tracking-brand text-muted">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
