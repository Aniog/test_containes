import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophia M.',
    rating: 5,
    text: "I've received so many compliments on my Amber Lace earrings. The quality is incredible for the price — they look and feel like fine jewelry.",
  },
  {
    id: 2,
    name: 'Claire E.',
    rating: 5,
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. Absolutely stunning.",
  },
  {
    id: 3,
    name: 'Natalia R.',
    rating: 5,
    text: "The Golden Sphere Huggies are my everyday earrings now. They're the perfect weight, never irritate my ears, and go with everything.",
  },
];

const StarRow = ({ count }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star
        key={i}
        className="w-3.5 h-3.5"
        style={{ fill: '#B8965A', color: '#B8965A' }}
      />
    ))}
  </div>
);

const Testimonials = () => (
  <section className="py-20 md:py-28 bg-ivory">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-14">
        <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-3">
          Reviews
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal tracking-wide">
          What Our Customers Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-cream p-8 border border-parchment flex flex-col gap-5"
          >
            <StarRow count={review.rating} />
            <p className="font-cormorant text-lg font-light text-charcoal leading-relaxed italic">
              "{review.text}"
            </p>
            <div className="mt-auto pt-4 border-t border-parchment">
              <p className="font-inter text-xs uppercase tracking-[0.1em] text-stone">
                {review.name}
              </p>
              <p className="font-inter text-xs text-mist mt-0.5">Verified Purchase</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
