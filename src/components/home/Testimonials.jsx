import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophia M.',
    rating: 5,
    text: 'I ordered the Golden Sphere Huggies and they are absolutely stunning. The quality is incredible for the price — they feel so luxurious. Already ordered two more pairs as gifts.',
  },
  {
    id: 2,
    name: 'Ella R.',
    rating: 5,
    text: 'The Flora Nectar necklace is even more beautiful in person. The crystals catch the light perfectly. I\'ve received so many compliments. Velmora is my new go-to for jewelry.',
  },
  {
    id: 3,
    name: 'Natalie J.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry — so thoughtful and elegant. The jewelry is gorgeous. 10/10 would recommend.',
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={12} className="fill-gold text-gold" />
    ))}
  </div>
);

const Testimonials = () => (
  <section className="py-20 md:py-28 bg-obsidian">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-12 md:mb-16">
        <p className="font-inter text-xs tracking-[0.2em] uppercase text-gold mb-3">
          Reviews
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ivory tracking-wide">
          What Our Customers Say
        </h2>
        <div className="w-12 h-px bg-gold mx-auto mt-5" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {reviews.map(review => (
          <div
            key={review.id}
            className="bg-obsidian border border-ivory/10 p-8 hover:border-gold/30 transition-colors duration-300"
          >
            <Stars count={review.rating} />
            <p className="font-cormorant text-lg italic text-ivory/80 leading-relaxed mt-5 mb-6">
              "{review.text}"
            </p>
            <div className="flex items-center gap-3 pt-5 border-t border-ivory/10">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="font-cormorant text-sm text-gold">
                  {review.name.charAt(0)}
                </span>
              </div>
              <span className="font-inter text-xs tracking-wide text-ivory/50">
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
