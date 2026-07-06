import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophie M.',
    rating: 5,
    text: 'I bought the Golden Sphere Huggies and I haven\'t taken them off since. The quality is incredible for the price — they look and feel so luxurious.',
  },
  {
    id: 2,
    name: 'Claire W.',
    rating: 5,
    text: 'Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. Absolutely stunning pieces.',
  },
  {
    id: 3,
    name: 'Maya R.',
    rating: 5,
    text: 'The Vivid Aura ear cuff is my new signature piece. So many compliments every time I wear it. Fast shipping, beautiful packaging.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream border-t border-divider">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-inter text-xs uppercase tracking-ultra-wide text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col gap-4 p-8 bg-sand border border-divider">
              {/* Stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-cormorant text-lg font-light text-charcoal leading-relaxed italic">
                "{review.text}"
              </p>

              {/* Name */}
              <div className="flex items-center gap-3 pt-2 border-t border-divider">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="font-cormorant text-sm font-medium text-gold">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <span className="font-inter text-xs uppercase tracking-widest text-charcoal">
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
