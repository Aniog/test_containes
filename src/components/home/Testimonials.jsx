import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophia M.',
    rating: 5,
    text: 'I wear the Golden Sphere Huggies every single day. They\'re the perfect weight — substantial but not heavy. I\'ve gotten so many compliments.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Claire W.',
    rating: 5,
    text: 'Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The quality is genuinely impressive for the price.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Priya S.',
    rating: 5,
    text: 'The Majestic Flora Nectar is exactly as beautiful in person as in the photos. Delicate, elegant, and the chain length is perfect. Will be ordering more.',
    product: 'Majestic Flora Nectar',
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="w-3 h-3"
          style={{
            fill: i < rating ? '#b8935a' : 'none',
            color: i < rating ? '#b8935a' : '#e8e0d4',
          }}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-manrope text-xs uppercase tracking-widest text-gold mb-3">Reviews</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-espresso">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map(review => (
            <div key={review.id} className="flex flex-col">
              <StarRating rating={review.rating} />
              <blockquote className="font-cormorant text-xl md:text-2xl font-light text-espresso leading-relaxed mt-5 mb-6 italic flex-1">
                "{review.text}"
              </blockquote>
              <div className="border-t border-linen pt-5">
                <p className="font-manrope text-xs uppercase tracking-widest text-bark">{review.name}</p>
                <p className="font-manrope text-xs text-stone mt-1">Verified Purchase · {review.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
