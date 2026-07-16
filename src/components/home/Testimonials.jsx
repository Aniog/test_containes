import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Anouk',
    initial: 'L',
    text: 'The quality is incredible for the price. I wear my Golden Sphere Huggies every single day and they still look brand new.',
  },
  {
    name: 'Claire',
    initial: 'M',
    text: 'Bought the Royal Heirloom Set as a gift for my sister — the packaging alone made her cry. The jewelry is stunning.',
  },
  {
    name: 'Sophie',
    initial: 'K',
    text: 'Finally found demi-fine pieces that feel luxurious without the guilt. Velmora is my go-to for gifting and self-treats.',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <h2 className="serif-heading text-2xl md:text-3xl text-espresso">Loved by You</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center">
              <div className="flex items-center justify-center gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={13} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-taupe leading-relaxed italic mb-4 max-w-xs mx-auto">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs tracking-[0.15em] uppercase text-espresso font-medium">
                {t.name} {t.initial}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
