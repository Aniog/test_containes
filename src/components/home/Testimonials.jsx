import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is incredible for the price. My Golden Sphere Huggies have become my everyday go-to. I get compliments constantly!',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a birthday gift for my sister. The packaging was beautiful and she absolutely loved it. Will be ordering again.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'I have sensitive skin and these are the first earrings that don\'t irritate me. The Amber Lace Earrings are stunning in person. Truly feels like fine jewelry.',
    product: 'Amber Lace Earrings',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-warm-white">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-3">
            Reviews
          </p>
          <h2 className="section-title text-3xl md:text-4xl">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-cream rounded-sm p-6 md:p-8 border border-stone/50"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-charcoal text-sm leading-relaxed mb-4">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="border-t border-stone/50 pt-4">
                <p className="font-sans font-medium text-sm text-charcoal">{review.name}</p>
                <p className="text-warm-gray text-xs mt-0.5">Purchased: {review.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
