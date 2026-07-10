import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophie M.',
    rating: 5,
    text: 'I wear the Vivid Aura cuff every single day. It hasn\'t tarnished at all after 3 months — and I get compliments constantly. Worth every penny.',
  },
  {
    id: 2,
    name: 'Camille R.',
    rating: 5,
    text: 'Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — delicate but substantial.',
  },
  {
    id: 3,
    name: 'Isabelle T.',
    rating: 5,
    text: 'Finally found a brand that gets demi-fine right. The Golden Sphere Huggies are my new everyday earrings. Comfortable, beautiful, and they look expensive.',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-inter text-[10px] uppercase tracking-[0.3em] text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col gap-4 p-8 bg-cream border border-gold/10"
            >
              {/* Stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} stroke="#C9A96E" fill="#C9A96E" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-cormorant text-lg font-light text-charcoal leading-relaxed italic">
                "{review.text}"
              </p>

              {/* Name */}
              <div className="mt-auto pt-4 border-t border-gold/15">
                <p className="font-inter text-xs uppercase tracking-widest text-warm-gray">
                  — {review.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
