import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophie M.',
    text: 'I ordered the Golden Sphere Huggies and they are absolutely stunning. The quality is incredible for the price — they feel solid and look so luxurious.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya K.',
    text: 'Bought the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is beautiful and delicate. Will be ordering again.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Claire B.',
    text: 'The Majestic Flora necklace is my new everyday piece. It layers beautifully and I get compliments every time I wear it. Velmora has a customer for life.',
    rating: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} className="fill-gold text-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-ivory py-20 md:py-28 border-t border-stone">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="font-inter text-xs tracking-widest uppercase text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col gap-4 p-8 bg-cream border border-stone"
            >
              <Stars count={review.rating} />
              <p className="font-cormorant text-xl font-light text-charcoal leading-relaxed italic">
                "{review.text}"
              </p>
              <p className="font-inter text-xs tracking-widest uppercase text-warm-gray mt-auto">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
