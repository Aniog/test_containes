import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    text: "I've received so many compliments on my Amber Lace earrings. The quality is incredible for the price — they look and feel like fine jewelry.",
    name: 'Sophie M.',
    product: 'Amber Lace Earrings',
  },
  {
    id: 2,
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. Absolutely stunning — will be ordering again.",
    name: 'Camille R.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    text: "The Golden Sphere Huggies are my everyday staple now. They're comfortable, they don't tarnish, and they go with everything. Obsessed.",
    name: 'Natalie K.',
    product: 'Golden Sphere Huggies',
  },
];

const Stars = () => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={12} fill="#B8965A" stroke="none" />
    ))}
  </div>
);

const Testimonials = () => (
  <section className="py-20 md:py-28 bg-ivory">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-14">
        <p className="font-inter text-xs font-medium tracking-[0.2em] uppercase text-gold mb-3">
          Reviews
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal tracking-wide">
          Loved by Thousands
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-cream p-8 border border-linen flex flex-col gap-4"
          >
            <Stars />
            <p className="font-cormorant text-xl font-light text-charcoal leading-relaxed italic flex-1">
              "{review.text}"
            </p>
            <div className="pt-4 border-t border-linen">
              <p className="font-inter text-xs font-medium text-charcoal tracking-wide">
                {review.name}
              </p>
              <p className="font-inter text-xs text-warmgray mt-0.5">
                Verified Purchase · {review.product}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
