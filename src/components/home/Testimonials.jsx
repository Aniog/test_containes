import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophia R.',
    rating: 5,
    text: 'I bought the Golden Sphere Huggies for myself and they haven\'t left my ears since. The quality is incredible for the price — they look and feel so luxurious.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Emma L.',
    rating: 5,
    text: 'Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — she wears it every single day.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Claire M.',
    rating: 5,
    text: 'The Majestic Flora Nectar necklace is everything. I get compliments every time I wear it. Velmora has a customer for life.',
    product: 'Majestic Flora Nectar',
  },
];

const StarRow = ({ count }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={12} className="fill-velmora-gold text-velmora-gold" strokeWidth={0} />
    ))}
  </div>
);

const Testimonials = () => (
  <section className="py-20 md:py-28 bg-velmora-obsidian">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-12 md:mb-16">
        <p className="font-manrope text-[10px] uppercase tracking-widest text-velmora-gold mb-2">
          Reviews
        </p>
        <h2 className="font-cormorant text-3xl md:text-4xl font-light text-velmora-cream tracking-wide">
          What Our Customers Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {reviews.map(review => (
          <div
            key={review.id}
            className="bg-velmora-charcoal p-7 md:p-8 flex flex-col gap-4 border border-velmora-stone/50"
          >
            <StarRow count={review.rating} />
            <blockquote className="font-cormorant text-lg font-light text-velmora-cream leading-relaxed italic flex-1">
              "{review.text}"
            </blockquote>
            <div className="hairline pt-4 border-velmora-stone">
              <p className="font-manrope text-xs text-velmora-whisper">
                {review.name}
              </p>
              <p className="font-manrope text-[10px] text-velmora-stone mt-0.5 uppercase tracking-widest">
                {review.product}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
