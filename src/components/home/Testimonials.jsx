import { Star } from 'lucide-react';

const reviews = [
  {
    text: 'Absolutely stunning. The Golden Sphere Huggies are my new everyday go-to — they catch the light so beautifully and feel weightless on.',
    name: 'Claire M.',
    product: 'Golden Sphere Huggies',
  },
  {
    text: 'Ordered the Royal Heirloom Set for my sister\'s wedding. The gift box alone made her cry. The jewelry is even more exquisite in person.',
    name: 'Elise T.',
    product: 'Royal Heirloom Set',
  },
  {
    text: 'I own several demi-fine brands and Velmora is by far the best quality at this price. The gold tone is warm and rich, not brassy at all.',
    name: 'Sophia R.',
    product: 'Amber Lace Earrings',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding py-16 md:py-24 bg-white">
      <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-charcoal text-center mb-12 md:mb-16">
        Loved by You
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
        {reviews.map((review, i) => (
          <div key={i} className="text-center">
            {/* Stars */}
            <div className="flex justify-center gap-0.5 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-3.5 h-3.5 fill-velmora-gold text-velmora-gold" />
              ))}
            </div>
            <p className="text-sm text-velmora-slate leading-relaxed italic">
              &ldquo;{review.text}&rdquo;
            </p>
            <p className="mt-4 text-xs tracking-widest uppercase text-velmora-charcoal">
              {review.name}
            </p>
            <p className="text-[11px] text-velmora-warmgray mt-1">
              on {review.product}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
