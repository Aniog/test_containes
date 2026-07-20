import { StarRating } from '@/components/ui/StarRating';

const testimonials = [
  {
    id: 1,
    name: 'Elise M.',
    rating: 5,
    text: 'The most beautiful packaging and the earrings feel so much more expensive than they are. Already ordered a second pair.',
  },
  {
    id: 2,
    name: 'Sophia L.',
    rating: 5,
    text: 'I wear my Velmora necklace every day. It has not tarnished and I get compliments constantly. True quiet luxury.',
  },
  {
    id: 3,
    name: 'Naomi R.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift and ended up keeping it. The perfect treat-yourself moment.',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-extra-wide text-muted mb-3">Love Letters</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground">
            What She Wears
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-surface p-8 md:p-10 shadow-soft hover:shadow-lift transition-shadow duration-300"
            >
              <StarRating rating={t.rating} size={14} className="mb-5" />
              <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs uppercase tracking-extra-wide text-muted font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
