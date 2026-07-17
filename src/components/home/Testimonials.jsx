import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophia R.',
    rating: 5,
    text: 'I wear the Amber Lace earrings every single day. They haven\'t tarnished at all and I get compliments constantly. Worth every penny.',
  },
  {
    id: 2,
    name: 'Maya T.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is absolutely stunning.',
  },
  {
    id: 3,
    name: 'Isabelle K.',
    rating: 5,
    text: 'Finally found a brand that does demi-fine right. The Golden Sphere Huggies are my new everyday staple. Hypoallergenic and so comfortable.',
  },
];

function StarRow({ count }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} fill="#C9A96E" className="text-velmora-gold" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-obsidian">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <p className="text-[10px] uppercase tracking-[0.25em] text-velmora-gold mb-3 font-medium">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-cream tracking-wide">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col p-8 border border-velmora-stone/50 hover:border-velmora-gold/30 transition-colors duration-300"
            >
              <StarRow count={review.rating} />
              <p className="font-serif text-lg font-light italic text-velmora-cream/80 leading-relaxed flex-1">
                "{review.text}"
              </p>
              <div className="mt-6 pt-6 border-t border-velmora-stone/40">
                <span className="text-xs uppercase tracking-widest font-medium text-velmora-gold">
                  — {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
