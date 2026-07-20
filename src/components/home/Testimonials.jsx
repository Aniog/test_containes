import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophie M.',
    rating: 5,
    text: "I wear the Golden Sphere Huggies every single day. They're the perfect weight — substantial enough to feel luxurious but light enough to forget you're wearing them.",
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Camille R.',
    rating: 5,
    text: 'Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — looks far more expensive than it is.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Isabelle T.',
    rating: 5,
    text: "The Majestic Flora Nectar is everything. I've gotten so many compliments. It layers beautifully with my other necklaces and hasn't tarnished at all after months of wear.",
    product: 'Majestic Flora Nectar',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-xs uppercase tracking-[0.15em] text-gold mb-2">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-espresso tracking-wide">
            What They're Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="#C9A96E"
                    strokeWidth={0}
                    className="text-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg font-light text-espresso leading-relaxed italic flex-1 mb-6">
                "{review.text}"
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-gold mb-4" />

              {/* Attribution */}
              <div>
                <p className="font-sans text-sm font-medium text-espresso">{review.name}</p>
                <p className="font-sans text-xs text-stone mt-0.5 uppercase tracking-[0.08em]">
                  {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
