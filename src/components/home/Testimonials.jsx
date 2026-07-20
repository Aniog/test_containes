import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophia M.',
    rating: 5,
    text: 'I bought the Amber Lace earrings for my birthday and I haven\'t taken them off since. The quality is incredible for the price — they look so much more expensive than they are.',
  },
  {
    id: 2,
    name: 'Claire D.',
    rating: 5,
    text: 'Ordered the Royal Heirloom Set as a gift for my sister. The packaging alone made her cry. The jewelry is stunning — delicate but substantial. Will be ordering again.',
  },
  {
    id: 3,
    name: 'Isabella C.',
    rating: 5,
    text: 'The Golden Sphere Huggies are my everyday staple now. They sit perfectly, no irritation, and the gold hasn\'t faded at all after 3 months of daily wear.',
  },
];

function StarRow({ count }) {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} className="text-gold fill-gold" strokeWidth={1} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <p className="font-inter text-xs tracking-widest uppercase text-gold mb-3">
            What They Say
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ink">
            Loved by Women Everywhere
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-linen p-8 border border-stone/30 flex flex-col"
            >
              <StarRow count={review.rating} />
              <p className="font-cormorant text-lg font-light text-ink leading-relaxed flex-1 mb-6 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-stone/30">
                <div className="w-8 h-8 rounded-full bg-stone/40 flex items-center justify-center">
                  <span className="font-cormorant text-sm font-medium text-mist">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <span className="font-inter text-xs tracking-widest uppercase text-mist">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
