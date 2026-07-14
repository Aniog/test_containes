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
    text: 'Ordered the Royal Heirloom Set as a birthday gift for my best friend. The packaging alone made her cry. The jewelry is absolutely stunning.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Priya S.',
    rating: 5,
    text: 'The Majestic Flora Nectar necklace is everything. It looks so much more expensive than it is. I\'ve worn it to weddings, dinners, and just to the grocery store.',
    product: 'Majestic Flora Nectar',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-parchment border-t border-linen">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-ultra-wide uppercase font-sans text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-obsidian" style={{ fontWeight: 300 }}>
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {reviews.map(review => (
            <div key={review.id} className="flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} style={{ fill: '#C9A96E', color: '#C9A96E' }} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-xl lg:text-2xl text-obsidian leading-relaxed mb-6 flex-1" style={{ fontWeight: 300 }}>
                "{review.text}"
              </blockquote>

              {/* Attribution */}
              <div className="border-t border-linen pt-5">
                <p className="text-xs tracking-widest uppercase font-sans text-obsidian font-medium">
                  {review.name}
                </p>
                <p className="text-xs text-ink-faint font-sans mt-1">
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
