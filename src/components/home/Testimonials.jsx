import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophia M.',
    rating: 5,
    text: "I wear the Golden Sphere Huggies every single day. They're the perfect weight — substantial enough to feel luxurious, light enough to forget you're wearing them.",
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Claire J.',
    rating: 5,
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — she hasn't taken it off.",
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Maya R.',
    rating: 5,
    text: "The Majestic Flora Nectar necklace is everything. I've gotten so many compliments. It looks way more expensive than it is — in the best possible way.",
    product: 'Majestic Flora Nectar',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-parchment py-20 lg:py-28 border-t border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-manrope text-[10px] tracking-[0.25em] uppercase text-gold mb-2">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-obsidian">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-cormorant text-lg italic text-obsidian leading-relaxed flex-1 mb-6">
                "{review.text}"
              </blockquote>

              {/* Divider */}
              <div className="w-8 h-px bg-gold mb-4" />

              {/* Attribution */}
              <div>
                <p className="font-manrope text-xs font-medium text-obsidian tracking-wide">
                  {review.name}
                </p>
                <p className="font-manrope text-[10px] text-ink-muted mt-0.5">
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
