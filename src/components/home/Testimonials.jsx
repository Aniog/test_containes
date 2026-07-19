import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophie M.',
    rating: 5,
    text: 'I wear the Golden Sphere Huggies every single day. They haven\'t tarnished at all after 6 months — I even shower in them. Absolutely worth every penny.',
  },
  {
    id: 2,
    name: 'Claire W.',
    rating: 5,
    text: 'Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The quality is stunning — looks so much more expensive than it is.',
  },
  {
    id: 3,
    name: 'Priya S.',
    rating: 5,
    text: 'Finally found jewelry that doesn\'t irritate my sensitive ears. The Vivid Aura ear cuff is my new signature piece. I get compliments every time I wear it.',
  },
];

const Testimonials = () => (
  <section className="py-20 md:py-28 bg-cream">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-14">
        <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
          Reviews
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal tracking-wide">
          What Our Customers Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-stone p-8 border border-divider hover:shadow-[0_8px_32px_rgba(26,20,16,0.06)] transition-shadow duration-300"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-3"
                  style={{ color: '#C9A96E', fill: '#C9A96E' }}
                />
              ))}
            </div>

            {/* Quote */}
            <p className="font-cormorant text-lg font-light text-charcoal leading-relaxed italic mb-6">
              "{review.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-divider">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="font-cormorant text-sm font-medium text-gold">
                  {review.name.charAt(0)}
                </span>
              </div>
              <span className="font-inter text-xs tracking-wider uppercase text-warm-gray">
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
