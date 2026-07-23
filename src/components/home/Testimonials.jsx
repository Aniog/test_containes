import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophia M.',
    rating: 5,
    text: 'I bought the Golden Sphere Huggies and I haven\'t taken them off in three weeks. The quality is incredible for the price — they look and feel like fine jewelry.',
  },
  {
    id: 2,
    name: 'Claire D.',
    rating: 5,
    text: 'Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — delicate but substantial.',
  },
  {
    id: 3,
    name: 'Natalie R.',
    rating: 5,
    text: 'Finally found a jewelry brand that gets it. The Amber Lace earrings are exactly what I\'ve been looking for — unique, elegant, and they haven\'t tarnished at all.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-[10px] tracking-widest uppercase text-champagne mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-velvet font-light">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-champagne mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map(review => (
            <div
              key={review.id}
              className="bg-parchment p-8 border border-mink/10 hover:border-champagne/30 transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={12} className="text-champagne fill-champagne" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg text-velvet leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blush flex items-center justify-center">
                  <span className="font-serif text-sm text-velvet">{review.name[0]}</span>
                </div>
                <span className="font-sans text-xs text-stone tracking-wide">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
