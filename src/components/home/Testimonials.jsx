import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophie M.',
    rating: 5,
    text: 'I ordered the Vivid Aura ear cuff and it arrived beautifully packaged. The quality is incredible for the price — it looks so much more expensive than it is. Already ordered two more pieces.',
    product: 'Vivid Aura Jewels',
  },
  {
    id: 2,
    name: 'Camille R.',
    rating: 5,
    text: 'The Royal Heirloom Set was a gift for my sister and she absolutely loved it. The packaging alone made it feel so luxurious. Will definitely be back for more.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Ava T.',
    rating: 5,
    text: 'I\'ve been wearing the Golden Sphere Huggies every single day for three months. They haven\'t tarnished at all and I get compliments constantly. Worth every penny.',
    product: 'Golden Sphere Huggies',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[10px] uppercase tracking-widest text-gold font-sans mb-2">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-espresso">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} fill="#C9A96E" className="text-gold" strokeWidth={0} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-base md:text-lg font-light text-mink leading-relaxed italic flex-1 mb-5">
                "{review.text}"
              </blockquote>

              {/* Divider */}
              <div className="w-8 h-px bg-gold/40 mb-4" />

              {/* Attribution */}
              <div>
                <p className="text-xs font-medium text-espresso font-sans uppercase tracking-widest">{review.name}</p>
                <p className="text-[10px] text-stone font-sans mt-0.5">Verified Purchase · {review.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
