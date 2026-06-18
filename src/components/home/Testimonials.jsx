import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophie M.',
    rating: 5,
    text: 'I wear the Golden Sphere Huggies every single day. They haven\'t tarnished at all after 6 months. Absolutely worth every penny.',
  },
  {
    id: 2,
    name: 'Claire W.',
    rating: 5,
    text: 'Ordered the Majestic Flora Nectar as a birthday gift for my sister. The packaging alone made her cry. The necklace is even more beautiful in person.',
  },
  {
    id: 3,
    name: 'Priya S.',
    rating: 5,
    text: 'Finally found jewelry that doesn\'t irritate my sensitive ears. The quality is incredible for the price point. Velmora is my new go-to.',
  },
];

function Stars({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3 h-3 fill-gold text-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-linen py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-manrope text-xs uppercase tracking-widest text-gold mb-2">
            Reviews
          </p>
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-obsidian">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-cream p-8 flex flex-col gap-4 border border-linen hover:border-gold/30 transition-colors duration-300"
            >
              <Stars count={review.rating} />
              <p className="font-cormorant text-lg italic text-obsidian leading-relaxed flex-1">
                "{review.text}"
              </p>
              <div className="border-t border-linen pt-4">
                <p className="font-manrope text-xs uppercase tracking-widest text-stone">
                  {review.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate rating */}
        <div className="flex items-center justify-center gap-3 mt-12">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gold text-gold" />
            ))}
          </div>
          <span className="font-manrope text-xs text-stone">
            4.8 out of 5 · Based on 524 reviews
          </span>
        </div>
      </div>
    </section>
  );
}
