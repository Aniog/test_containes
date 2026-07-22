import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    text: 'I bought the Golden Sphere Huggies for myself and I haven\'t taken them off since. The quality is incredible for the price — they look so much more expensive than they are.',
    name: 'Sophie M.',
    location: 'London, UK',
    rating: 5,
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    text: 'Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — delicate, warm, and so elegant.',
    name: 'Camille R.',
    location: 'Paris, France',
    rating: 5,
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    text: 'The Majestic Flora Necklace is exactly what I was looking for — something that feels special but I can wear every day. Fast shipping, beautiful packaging. Will be back.',
    name: 'Ava T.',
    location: 'New York, USA',
    rating: 5,
    product: 'Majestic Flora Nectar',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-ivory border-t border-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-champagne mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian tracking-wide">
            What They're Saying
          </h2>
          <div className="w-12 h-px bg-champagne mx-auto mt-5" />
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-champagne text-champagne"
                    strokeWidth={0}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-cormorant text-lg font-light text-obsidian leading-relaxed italic flex-1 mb-6">
                "{review.text}"
              </blockquote>

              {/* Divider */}
              <div className="w-8 h-px bg-champagne mb-5" />

              {/* Attribution */}
              <div>
                <p className="font-inter text-xs font-medium text-obsidian uppercase tracking-[0.1em]">
                  {review.name}
                </p>
                <p className="font-inter text-[11px] text-stone mt-0.5">{review.location}</p>
                <p className="font-inter text-[10px] text-champagne mt-1 uppercase tracking-[0.08em]">
                  {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
