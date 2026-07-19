import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophia M.',
    rating: 5,
    text: 'I wear the Vivid Aura cuff every single day. The quality is incredible for the price — it hasn\'t tarnished at all after 6 months of daily wear.',
  },
  {
    id: 2,
    name: 'Emma R.',
    rating: 5,
    text: 'Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is absolutely stunning in person.',
  },
  {
    id: 3,
    name: 'Natalie K.',
    rating: 5,
    text: 'Finally found a jewelry brand that feels truly luxurious without the luxury price tag. The Flora Nectar necklace gets compliments every time I wear it.',
  },
];

const Testimonials = () => (
  <section className="bg-cream py-20 lg:py-28">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <div className="text-center mb-14">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3 font-medium">
          Reviews
        </p>
        <h2 className="font-serif text-4xl lg:text-5xl text-charcoal font-light">
          What Our Customers Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {reviews.map(review => (
          <div
            key={review.id}
            className="flex flex-col items-center text-center px-4 py-8 border border-gold/15 bg-parchment/50"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={14} className="text-gold fill-gold" />
              ))}
            </div>

            {/* Quote */}
            <p className="font-serif text-lg italic text-charcoal leading-relaxed mb-6 flex-1">
              "{review.text}"
            </p>

            {/* Divider */}
            <div className="w-8 h-px bg-gold/40 mb-5" />

            {/* Name */}
            <p className="text-xs tracking-widest uppercase text-stone font-medium">
              {review.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
