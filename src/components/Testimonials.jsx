import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sophia M.',
    text: 'The quality is incredible for the price. I wear my Golden Sphere Huggies every single day and they still look brand new.',
    rating: 5,
  },
  {
    name: 'Ava K.',
    text: 'Bought the Royal Heirloom Set as a birthday gift and she absolutely loved it. The packaging felt so premium.',
    rating: 5,
  },
  {
    name: 'Lily R.',
    text: 'Finally, demi-fine jewelry that does not irritate my sensitive skin. Beautiful design and fast shipping too.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-14 md:py-20 bg-parchment">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <h2 className="font-serif text-3xl md:text-4xl mb-10 md:mb-12 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((r, i) => (
            <div key={i} className="bg-cream p-6 md:p-8 flex flex-col">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-warmgray leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
              <p className="mt-5 text-sm font-medium">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
