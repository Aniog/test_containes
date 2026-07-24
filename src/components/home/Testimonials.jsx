import { Star } from 'lucide-react';

const reviews = [
  {
    text: 'Absolutely stunning quality. The gold finish is impeccable — looks and feels far more expensive than the price. I wear my huggies every single day.',
    name: 'Sophia R.',
  },
  {
    text: 'I bought the Royal Heirloom Set for my sister\'s wedding gift. She cried. The presentation, the craftsmanship — everything was perfect.',
    name: 'Emma L.',
  },
  {
    text: 'Finally, demi-fine jewelry that doesn\'t irritate my sensitive skin. The pieces are so elegant and the packaging is beautiful. My new obsession.',
    name: 'Olivia M.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-velmora-cream">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl lg:text-4xl text-velmora-ink font-light tracking-wide">
            Loved by You
          </h2>
          <div className="hairline w-24 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {reviews.map((review) => (
            <div key={review.name} className="text-center">
              <div className="flex justify-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="text-sm font-sans text-velmora-stone leading-relaxed italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="mt-4 text-xs font-sans font-medium tracking-[0.1em] uppercase text-velmora-ink">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}