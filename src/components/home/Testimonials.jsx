import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophie M.',
    rating: 5,
    text: 'I wear these every single day. The quality is incredible for the price — they haven\'t tarnished at all after 6 months of daily wear.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Camille R.',
    rating: 5,
    text: 'Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. Absolutely stunning.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Anya T.',
    rating: 5,
    text: 'The Majestic Flora Nectar is even more beautiful in person. I get compliments every time I wear it. Will definitely be ordering more.',
    product: 'Majestic Flora Nectar',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="font-sans text-xs tracking-widest3 uppercase text-champagne mb-3">Reviews</p>
        <h2 className="font-serif text-4xl md:text-5xl text-obsidian font-light">What They're Saying</h2>
        <div className="w-12 h-px bg-champagne mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((r) => (
          <div key={r.id} className="bg-parchment p-8 flex flex-col gap-4">
            {/* Stars */}
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={13} fill="#c9a96e" className="text-champagne" strokeWidth={1} />
              ))}
            </div>

            {/* Quote */}
            <p className="font-serif text-lg text-obsidian font-light leading-relaxed italic flex-1">
              "{r.text}"
            </p>

            {/* Attribution */}
            <div className="border-t border-obsidian/10 pt-4">
              <p className="font-sans text-sm font-semibold text-obsidian">{r.name}</p>
              <p className="font-sans text-xs text-stone-warm mt-0.5">{r.product}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
