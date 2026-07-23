import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophia R.',
    rating: 5,
    text: 'I bought the Amber Lace Earrings for myself as a treat and I haven\'t taken them off. The quality is incredible for the price — they feel genuinely luxurious.',
    product: 'Amber Lace Earrings',
  },
  {
    id: 2,
    name: 'Camille T.',
    rating: 5,
    text: 'Gifted the Royal Heirloom Set to my sister for her birthday. The packaging alone made her cry. She wears it every single day. Worth every penny.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Mia L.',
    rating: 5,
    text: 'The Golden Sphere Huggies are my new everyday earring. They sit so perfectly and the gold tone is warm and rich — not cheap-looking at all.',
    product: 'Golden Sphere Huggies',
  },
];

function StarRow({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} className="text-gold fill-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream border-t border-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-manrope text-xs uppercase tracking-[0.15em] text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col p-8 bg-parchment border border-linen hover:shadow-[0_8px_32px_rgba(26,23,20,0.06)] transition-shadow duration-300"
            >
              <StarRow count={review.rating} />
              <blockquote className="font-cormorant text-lg font-light text-obsidian leading-relaxed italic flex-1 mb-6">
                "{review.text}"
              </blockquote>
              <div className="border-t border-linen pt-4">
                <p className="font-manrope text-xs font-medium text-obsidian">{review.name}</p>
                <p className="font-manrope text-xs text-whisper mt-0.5">Verified Purchase · {review.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
