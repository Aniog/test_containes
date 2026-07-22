import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophia M.',
    rating: 5,
    text: 'I bought the Royal Heirloom Set as a birthday gift for my sister and she absolutely loved it. The packaging alone felt so luxurious. Will definitely be ordering again.',
  },
  {
    id: 2,
    name: 'Camille R.',
    rating: 5,
    text: 'The Golden Sphere Huggies are my new everyday earrings. They\'re the perfect weight — substantial enough to feel special but light enough to forget you\'re wearing them.',
  },
  {
    id: 3,
    name: 'Isabelle T.',
    rating: 5,
    text: 'Genuinely surprised by the quality at this price point. The gold hasn\'t faded at all after 3 months of daily wear. Velmora has a customer for life.',
  },
];

const Testimonials = () => (
  <section className="bg-blush py-20 md:py-28 border-t border-mist">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-14">
        <p className="font-inter text-xs uppercase tracking-widest2 text-gold mb-3">
          Reviews
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal">
          What Our Customers Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {reviews.map((review) => (
          <div key={review.id} className="bg-ivory p-8 md:p-10 flex flex-col gap-5">
            {/* Stars */}
            <div className="flex gap-1">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} size={12} className="text-gold fill-gold" />
              ))}
            </div>

            {/* Quote */}
            <p className="font-cormorant text-lg font-light text-charcoal leading-relaxed italic flex-1">
              "{review.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-2 border-t border-mist">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="font-cormorant text-sm font-medium text-gold">
                  {review.name[0]}
                </span>
              </div>
              <span className="font-inter text-xs uppercase tracking-widest2 text-warm-gray">
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
