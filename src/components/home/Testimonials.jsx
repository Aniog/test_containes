import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophie M.',
    rating: 5,
    text: 'I wear the Vivid Aura ear cuff every single day. It\'s become my signature piece — so many compliments. The quality is incredible for the price.',
    product: 'Vivid Aura Ear Cuff',
  },
  {
    id: 2,
    name: 'Claire W.',
    rating: 5,
    text: 'Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — she hasn\'t taken it off.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Maya R.',
    rating: 5,
    text: 'The Golden Sphere Huggies are perfection. Chunky enough to make a statement but comfortable enough to sleep in. Velmora has ruined all other jewelry for me.',
    product: 'Golden Sphere Huggies',
  },
];

function StarRow({ rating }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} size={13} style={{ color: '#c49a45', fill: '#c49a45' }} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-3">
            Customer Love
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-obsidian font-light">
            What They're Saying
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-parchment p-8 md:p-10 relative"
            >
              {/* Quote mark */}
              <span className="font-serif text-6xl text-gold/20 absolute top-4 left-6 leading-none select-none">
                "
              </span>
              <StarRow rating={review.rating} />
              <p className="font-serif text-base md:text-lg text-mink leading-relaxed italic mb-6">
                "{review.text}"
              </p>
              <hr className="divider mb-4" />
              <div>
                <p className="font-sans text-sm font-medium text-obsidian">{review.name}</p>
                <p className="font-sans text-xs text-stone mt-0.5">Verified Purchase · {review.product}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-2 mb-1">
            {[1,2,3,4,5].map((s) => (
              <Star key={s} size={16} style={{ color: '#c49a45', fill: '#c49a45' }} />
            ))}
          </div>
          <p className="font-sans text-sm text-stone">
            4.9 out of 5 · Based on 562 reviews
          </p>
        </div>
      </div>
    </section>
  );
}
