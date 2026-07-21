import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah M.',
    text: 'Absolutely stunning. The gold finish is so rich — I wear my huggies every single day and they still look brand new.',
    product: 'Golden Sphere Huggies',
  },
  {
    name: 'Rachel K.',
    text: 'The quality is incredible for the price point. I bought the necklace as a gift and ended up keeping one for myself too.',
    product: 'Majestic Flora Nectar',
  },
  {
    name: 'Danielle P.',
    text: 'Finally, jewelry that feels luxurious without the guilt. The packaging is beautiful — it feels like a gift to yourself.',
    product: 'Royal Heirloom Set',
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Kind Words</p>
        <h2 className="font-serif text-3xl md:text-5xl tracking-wider mb-4">
          LOVED BY YOU
        </h2>
        <div className="w-12 h-px bg-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div key={review.name} className="text-center px-4">
            <div className="flex items-center justify-center gap-0.5 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-sm text-velvet-700 leading-relaxed mb-5 italic">
              &ldquo;{review.text}&rdquo;
            </p>
            <p className="text-xs tracking-widest uppercase font-medium text-velvet-950">
              {review.name}
            </p>
            <p className="text-xs text-velvet-500 mt-1">{review.product}</p>
          </div>
        ))}
      </div>
    </section>
  );
}