import { StarRating } from '@/components/ui/StarRating';

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'The quality is stunning for the price. I wear my huggies every day and they still look brand new.',
    rating: 5,
  },
  {
    name: 'Emily R.',
    text: 'Bought the Royal Heirloom Set as a gift and the packaging made it feel so luxurious. She loved it.',
    rating: 5,
  },
  {
    name: 'Jessica T.',
    text: 'Minimal, elegant, and exactly what I wanted. Fast shipping too. Already planning my next order.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-velmora-espresso/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-velmora-stone uppercase tracking-[0.2em] text-sm mb-2">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-velmora-espresso">
            Loved by Our Customers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-velmora-cream p-8 md:p-10 text-center"
            >
              <div className="flex justify-center mb-4">
                <StarRating rating={item.rating} size={16} />
              </div>
              <p className="text-velmora-espresso/90 leading-relaxed mb-6 italic font-serif text-lg">
                “{item.text}”
              </p>
              <p className="text-sm uppercase tracking-[0.14em] text-velmora-stone">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
