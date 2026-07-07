import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sophie M.',
    rating: 5,
    text: 'I bought the Vivid Aura ear cuff on a whim and now I wear it every single day. The quality is incredible for the price — it hasn\'t tarnished at all after 3 months.',
  },
  {
    id: 2,
    name: 'Camille R.',
    rating: 5,
    text: 'Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — delicate but substantial. Will be ordering again.',
  },
  {
    id: 3,
    name: 'Isabelle T.',
    rating: 5,
    text: 'Finally found a jewelry brand that hits the sweet spot between affordable and luxurious. The Golden Sphere Huggies are my new everyday earrings. Obsessed.',
  },
];

function StarRow() {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} size={12} strokeWidth={1} className="fill-gold text-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory border-t border-stone">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3">Reviews</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink font-light">What They're Saying</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col gap-5 p-8 bg-parchment border border-stone">
              <StarRow />
              <p className="font-serif text-lg text-ink font-light leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="mt-auto pt-4 border-t border-stone">
                <p className="font-sans text-xs tracking-widest uppercase text-muted font-medium">
                  {t.name}
                </p>
                <p className="font-sans text-[10px] text-whisper mt-0.5">Verified Buyer</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
