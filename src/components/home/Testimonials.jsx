import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophia M.',
    rating: 5,
    text: 'I wear the Vivid Aura cuff every single day. It\'s become my signature piece — so many compliments. The quality is incredible for the price.',
    product: 'Vivid Aura Jewels',
  },
  {
    id: 2,
    name: 'Elena R.',
    rating: 5,
    text: 'Ordered the Flora Nectar necklace as a birthday gift for my sister. She absolutely loves it. The packaging was beautiful and it arrived so quickly.',
    product: 'Majestic Flora Nectar',
  },
  {
    id: 3,
    name: 'Claire D.',
    rating: 5,
    text: 'The Golden Sphere Huggies are perfection. Chunky but not overwhelming, and they haven\'t tarnished at all after months of daily wear.',
    product: 'Golden Sphere Huggies',
  },
];

const StarRating = ({ rating }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={12}
        className="text-gold fill-gold"
        strokeWidth={0}
        fill="currentColor"
      />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ivory font-light">
            What They're Saying
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-5" />
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map(review => (
            <div
              key={review.id}
              className="border border-ivory/10 p-8 md:p-10 hover:border-gold/30 transition-colors duration-300"
            >
              <StarRating rating={review.rating} />
              <blockquote className="font-serif text-lg text-ivory font-light italic leading-relaxed mt-5 mb-6">
                "{review.text}"
              </blockquote>
              <div className="border-t border-ivory/10 pt-5">
                <p className="text-xs font-sans uppercase tracking-widest text-gold">
                  {review.name}
                </p>
                <p className="text-[10px] font-sans text-ivory/40 mt-1">
                  Verified Purchase · {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-gold fill-gold" strokeWidth={0} fill="currentColor" />
              ))}
            </div>
            <span className="font-serif text-2xl text-ivory font-light">4.8</span>
          </div>
          <p className="text-xs font-sans text-ivory/40 uppercase tracking-widest">
            Based on 435 reviews
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
