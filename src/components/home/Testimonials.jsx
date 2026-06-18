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
    name: 'Isabelle R.',
    rating: 5,
    text: 'Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. Absolutely stunning pieces.',
  },
  {
    id: 3,
    name: 'Camille T.',
    rating: 5,
    text: 'The Majestic Flora Nectar necklace is everything. Delicate, beautiful, and I get compliments every single time I wear it.',
  },
];

function StarRow({ rating }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={13} className="text-gold fill-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-manrope text-xs tracking-[0.2em] uppercase text-gold mb-2">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ink">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-linen px-8 py-8 border border-stone/20 flex flex-col"
            >
              <StarRow rating={review.rating} />
              <p className="font-cormorant text-lg italic text-ink leading-relaxed flex-1 mb-6">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-stone/30">
                <div className="w-8 h-8 rounded-full bg-stone/30 flex items-center justify-center">
                  <span className="font-cormorant text-sm font-medium text-muted">
                    {review.name[0]}
                  </span>
                </div>
                <span className="font-manrope text-xs tracking-[0.1em] uppercase text-muted">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust stats */}
        <div className="mt-14 pt-10 border-t border-stone/30 grid grid-cols-3 gap-4 text-center">
          {[
            { value: '4.9', label: 'Average Rating' },
            { value: '2,400+', label: 'Happy Customers' },
            { value: '98%', label: 'Would Recommend' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="font-cormorant text-4xl md:text-5xl font-light text-gold mb-1">{value}</p>
              <p className="font-manrope text-xs tracking-[0.1em] uppercase text-muted">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
