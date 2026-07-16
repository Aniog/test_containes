import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophia M.',
    rating: 5,
    text: "I've been wearing the Golden Sphere Huggies every single day for three months. They haven't tarnished at all and I get compliments constantly. Worth every penny.",
  },
  {
    id: 2,
    name: 'Claire L.',
    rating: 5,
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is absolutely stunning — looks so much more expensive than it is.",
  },
  {
    id: 3,
    name: 'Natalia R.',
    rating: 5,
    text: "Finally found a brand that delivers on the demi-fine promise. The Amber Lace Earrings are delicate but feel incredibly well-made. Velmora is my new go-to.",
  },
];

function Stars({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} fill="#B8935A" stroke="none" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-parchment py-16 md:py-24 border-t border-gold-muted">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ink tracking-wide">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-warmwhite p-8 border border-gold-muted/50 hover:border-gold-muted transition-colors duration-300"
            >
              <Stars count={review.rating} />
              <p className="font-cormorant text-lg font-light text-charcoal leading-relaxed mt-5 italic">
                "{review.text}"
              </p>
              <div className="mt-6 pt-5 border-t border-gold-muted/50">
                <p className="font-inter text-[11px] uppercase tracking-[0.12em] text-stone-warm">
                  — {review.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate rating */}
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={14} fill="#B8935A" stroke="none" />
              ))}
            </div>
            <span className="font-inter text-xs text-stone-warm">
              4.9 out of 5 · 524 reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
