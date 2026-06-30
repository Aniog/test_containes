import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah M.',
    text: 'The quality exceeded my expectations. I wear my Golden Sphere Huggies every day and they still look brand new after six months.',
    rating: 5,
  },
  {
    name: 'Jessica L.',
    text: 'Beautiful packaging and even more beautiful jewelry. The ear cuff is my new signature piece — I get compliments constantly.',
    rating: 5,
  },
  {
    name: 'Amanda K.',
    text: 'I bought the Royal Heirloom Set as a gift and ended up keeping it for myself. The filigree detail is absolutely stunning.',
    rating: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-gold fill-gold' : 'text-hairline'}`}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream border-t border-hairline">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-widest text-gold font-medium mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl">Loved by Our Community</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 md:p-10 shadow-card">
              <Stars count={review.rating} />
              <p className="mt-5 text-base leading-relaxed text-base/90">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="mt-6 text-xs uppercase tracking-widest text-muted font-medium">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
