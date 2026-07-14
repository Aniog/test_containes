import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    text: "I've received so many compliments on my Amber Lace earrings. The quality is incredible for the price — they look and feel like fine jewelry.",
    name: 'Sophie M.',
    location: 'New York',
    rating: 5,
  },
  {
    id: 2,
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. She hasn't taken the necklace off since.",
    name: 'Camille R.',
    location: 'London',
    rating: 5,
  },
  {
    id: 3,
    text: "The Golden Sphere Huggies are my everyday staple. They're comfortable, they don't tarnish, and they go with absolutely everything.",
    name: 'Aria T.',
    location: 'Sydney',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-parchment border-t border-sand">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold mb-3">What They Say</p>
          <h2 className="font-serif text-4xl md:text-5xl text-obsidian">Loved by Thousands</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map(review => (
            <div key={review.id} className="flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={13} fill="#C9A96E" stroke="none" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-lg md:text-xl text-obsidian leading-relaxed mb-6 flex-1">
                "{review.text}"
              </blockquote>

              {/* Attribution */}
              <div className="border-t border-sand pt-5">
                <p className="font-sans text-sm font-500 text-obsidian">{review.name}</p>
                <p className="font-sans text-xs text-muted">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
