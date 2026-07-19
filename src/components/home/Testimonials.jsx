import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophie M.',
    rating: 5,
    text: 'I bought the Golden Sphere Huggies and I haven\'t taken them off since. The quality is incredible for the price — they look and feel so luxurious.',
  },
  {
    id: 2,
    name: 'Claire W.',
    rating: 5,
    text: 'Ordered the Royal Heirloom Set as a birthday gift for my best friend. The packaging alone made her cry. She wears it every single day.',
  },
  {
    id: 3,
    name: 'Maya R.',
    rating: 5,
    text: 'Finally found a jewelry brand that delivers on its promises. The Majestic Flora Nectar necklace is even more beautiful in person. Fast shipping too!',
  },
];

function StarRow() {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} size={12} style={{ fill: '#B8935A', color: '#B8935A' }} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory border-t border-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-inter text-[10px] uppercase tracking-widest text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal tracking-wide">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col gap-5">
              <StarRow />
              <p className="font-cormorant text-lg italic text-charcoal leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-parchment">
                <div className="w-8 h-8 rounded-full bg-parchment flex items-center justify-center">
                  <span className="font-cormorant text-sm text-mink">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <span className="font-inter text-xs uppercase tracking-widest text-mink">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
