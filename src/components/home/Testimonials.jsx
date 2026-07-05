import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sophia M.',
    text: 'The quality is incredible for the price point. I wear my Golden Sphere Huggies every single day — they still look brand new after months.',
  },
  {
    name: 'Rachel K.',
    text: 'I bought the Royal Heirloom Set for my sister\'s wedding. The packaging was beautiful and she absolutely loved it. Will be ordering for myself next.',
  },
  {
    name: 'Jasmine L.',
    text: 'Finally found demi-fine jewelry that feels luxurious without the guilt. The Majestic Flora necklace gets compliments everywhere I go.',
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-deep tracking-widetitle font-semibold">
          From Our Community
        </h2>
        <p className="font-sans text-sm text-velmora-muted mt-4">
          What our customers are saying
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="text-center">
            <div className="flex items-center justify-center gap-0.5 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
              ))}
            </div>
            <p className="font-sans text-sm text-velmora-muted leading-relaxed italic">
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="font-serif text-sm text-velmora-deep mt-4 tracking-widetitle">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
