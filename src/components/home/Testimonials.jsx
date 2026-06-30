import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophia M.',
    rating: 5,
    text: 'I bought the Golden Sphere Huggies and I haven\'t taken them off since. The quality is incredible for the price — they feel so luxurious.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Claire D.',
    rating: 5,
    text: 'Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. Absolutely stunning.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Natalie B.',
    rating: 5,
    text: 'The Majestic Flora necklace is exactly what I was looking for — delicate, colorful, and so elegant. Fast shipping too!',
    product: 'Majestic Flora Nectar Necklace',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-ultra-wide uppercase font-sans text-gold mb-3">
            What They Say
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-obsidian font-light">
            Loved by Thousands
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-ivory-dark border border-parchment p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg text-obsidian italic leading-relaxed flex-1 mb-6">
                "{review.text}"
              </p>

              {/* Attribution */}
              <div className="border-t border-parchment pt-4">
                <p className="text-sm font-sans font-medium text-obsidian">{review.name}</p>
                <p className="text-xs text-text-muted font-sans mt-0.5">
                  Verified Purchase · {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="text-center mt-10">
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-gold fill-gold" />
              ))}
            </div>
            <span className="font-serif text-xl text-obsidian">4.9</span>
            <span className="text-sm text-text-muted font-sans">from 567 reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
