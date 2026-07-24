import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophie M.',
    rating: 5,
    text: 'I ordered the Amber Lace Earrings for my birthday and they exceeded every expectation. The quality is incredible for the price — they look and feel like fine jewelry.',
  },
  {
    id: 2,
    name: 'Claire W.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift for my sister and she absolutely loved it. The packaging alone is worth it. Will definitely be ordering again.',
  },
  {
    id: 3,
    name: 'Priya S.',
    rating: 5,
    text: 'The Golden Sphere Huggies are my everyday earrings now. They go with everything and I get compliments constantly. Velmora has a customer for life.',
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={12} fill="#B8935A" className="text-gold" />
    ))}
  </div>
);

const Testimonials = () => (
  <section className="py-20 md:py-28 bg-ivory border-t border-stone-light">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-14">
        <p className="font-inter text-xs uppercase tracking-[0.25em] text-gold mb-3">
          Reviews
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-espresso">
          What Our Customers Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {reviews.map((review) => (
          <div key={review.id} className="flex flex-col gap-4">
            <Stars count={review.rating} />
            <p className="font-cormorant text-lg italic text-espresso-light leading-relaxed">
              "{review.text}"
            </p>
            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-stone-light">
              <div className="w-8 h-8 rounded-full bg-gold-pale flex items-center justify-center">
                <span className="font-cormorant text-sm text-espresso font-medium">
                  {review.name[0]}
                </span>
              </div>
              <span className="font-inter text-xs uppercase tracking-widest text-stone">
                {review.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
