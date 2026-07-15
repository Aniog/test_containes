import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    text: "I've received so many compliments on these earrings. The quality is incredible for the price — they look genuinely expensive.",
    name: 'Sophia M.',
    rating: 5,
  },
  {
    id: 2,
    text: "Ordered the Royal Heirloom Set as a birthday gift. The packaging alone made it feel like a luxury purchase. She was absolutely thrilled.",
    name: 'Claire D.',
    rating: 5,
  },
  {
    id: 3,
    text: "The Golden Sphere Huggies are my everyday staple now. They're comfortable, they don't tarnish, and they go with everything.",
    name: 'Natalie B.',
    rating: 5,
  },
];

const StarRow = ({ count = 5 }) => (
  <div className="flex gap-0.5 mb-4">
    {[...Array(count)].map((_, i) => (
      <Star key={i} size={12} style={{ color: '#c9a96e', fill: '#c9a96e' }} />
    ))}
  </div>
);

const Testimonials = () => (
  <section className="py-20 md:py-28 bg-velvet">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-14">
        <p className="text-xs uppercase tracking-widest font-sans text-gold mb-3">Reviews</p>
        <h2 className="font-serif text-3xl md:text-4xl text-ivory font-light">
          What Our Customers Say
        </h2>
        <div className="w-12 h-px bg-gold mx-auto mt-5 opacity-60" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {reviews.map(review => (
          <div
            key={review.id}
            className="border border-white/10 p-8 hover:border-gold/30 transition-colors duration-300"
          >
            <StarRow count={review.rating} />
            <blockquote className="font-serif text-ivory/90 text-lg font-light leading-relaxed italic mb-6">
              "{review.text}"
            </blockquote>
            <p className="text-xs uppercase tracking-widest font-sans text-gold">
              — {review.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
