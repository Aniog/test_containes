import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophie M.',
    rating: 5,
    text: 'I wear the Vivid Aura ear cuff every single day. It\'s become my signature piece. The quality is incredible for the price — it hasn\'t tarnished at all after 6 months.',
    product: 'Vivid Aura Jewels',
  },
  {
    id: 2,
    name: 'Claire W.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — delicate but substantial. Will be ordering again.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Maya K.',
    rating: 5,
    text: 'The Golden Sphere Huggies are everything. They\'re the perfect weight, the clasp is secure, and they go with literally everything. I\'ve already recommended Velmora to all my friends.',
    product: 'Golden Sphere Huggies',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-obsidian py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-cream">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map(review => (
            <div
              key={review.id}
              className="bg-charcoal border border-cream/10 p-7 md:p-8 flex flex-col gap-5"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={12} strokeWidth={0} className="fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-base font-light text-cream/80 leading-relaxed italic flex-1">
                "{review.text}"
              </p>

              {/* Attribution */}
              <div className="border-t border-cream/10 pt-4">
                <p className="font-sans text-xs tracking-widest uppercase text-gold font-medium">
                  {review.name}
                </p>
                <p className="font-sans text-[10px] text-cream/30 mt-0.5 tracking-wide">
                  Verified Purchase · {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
