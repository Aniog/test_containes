import { Star } from 'lucide-react';

const reviews = [
  {
    text: 'Absolutely stunning quality. The gold finish is flawless and I wear my huggies every single day. Already planning my next purchase.',
    name: 'Sophie K.',
  },
  {
    text: 'Ordered the Royal Heirloom Set for my sister\'s wedding. The presentation alone made her cry. Truly special pieces that feel luxurious.',
    name: 'Mia R.',
  },
  {
    text: 'Finally, demi-fine jewelry that feels luxurious without the markup. My new go-to for gifts — and for treating myself.',
    name: 'Olivia T.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-taupe mb-3">Love Notes</p>
          <h2 className="font-serif text-3xl lg:text-4xl text-oxford">What Our Customers Say</h2>
          <div className="mt-4 w-[60px] h-[1px] bg-gold/40 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-[960px] mx-auto">
          {reviews.map((review) => (
            <div key={review.name} className="text-center">
              <div className="flex items-center justify-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-mocha/80 leading-relaxed italic">&ldquo;{review.text}&rdquo;</p>
              <p className="mt-5 text-xs font-semibold tracking-wider uppercase text-oxford">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
