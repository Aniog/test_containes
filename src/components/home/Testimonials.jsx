import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah M.',
    text: 'The quality is incredible for the price. I get compliments every time I wear my Golden Sphere Huggies. They have not tarnished after months of daily wear.',
    rating: 5,
  },
  {
    name: 'Jessica L.',
    text: 'Bought the Royal Heirloom Set as a gift and ended up keeping it for myself. The packaging alone feels like a luxury unboxing experience.',
    rating: 5,
  },
  {
    name: 'Amanda K.',
    text: 'Finally found jewelry that does not irritate my sensitive skin. The Amber Lace Earrings are stunning and so lightweight I forget I am wearing them.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">Real Reviews</p>
          <h2 className="font-serif text-4xl md:text-5xl text-warm-white">Loved by Our Community</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-base border border-divider rounded-lg p-6 md:p-8 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-warm-white/80 leading-relaxed font-sans font-light flex-1">
                "{review.text}"
              </p>
              <p className="mt-6 text-xs font-sans font-medium uppercase tracking-wider text-taupe">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
