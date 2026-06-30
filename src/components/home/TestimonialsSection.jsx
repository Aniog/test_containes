import StarRating from '@/components/StarRating';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'The quality exceeded my expectations. I have sensitive ears and these are the first earrings I can wear all day without irritation. Absolutely gorgeous.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jessica K.',
    text: 'Bought the Royal Heirloom Set as a birthday gift for my sister. She cried. The packaging alone feels like a luxury experience.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amanda T.',
    text: 'I have been wearing my Golden Sphere Huggies every day for three months. No tarnish, no green skin. Just beautiful, warm gold that goes with everything.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-2xl md:text-3xl font-light tracking-wide">
            Loved by Thousands
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="border border-hairline p-8 md:p-10 flex flex-col"
            >
              <StarRating rating={t.rating} size={14} />
              <p className="text-sm text-base leading-relaxed mt-5 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs uppercase tracking-[0.15em] font-medium text-muted mt-6">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
