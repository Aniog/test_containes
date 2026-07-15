import { Star } from 'lucide-react';

const reviews = [
  { text: 'Absolutely stunning quality for the price. The gold finish is flawless and I wear my huggies every single day — no fading at all.', name: 'Sophie K.', product: 'Golden Sphere Huggies' },
  { text: 'I bought the Majestic Flora necklace for my sister\'s wedding and it was the star of my outfit. Received so many compliments.', name: 'Rachel M.', product: 'Majestic Flora Nectar' },
  { text: 'Finally, demi-fine jewelry that feels truly luxurious. The packaging is beautiful too — makes gifting so special.', name: 'Lauren D.', product: 'Royal Heirloom Set' },
];

export default function Testimonials() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-16 py-16 lg:py-24">
      <div className="text-center mb-12 lg:mb-16">
        <p className="text-xs tracking-widest uppercase text-taupe font-sans mb-4">Testimonials</p>
        <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl font-light">Love Letters</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
        {reviews.map((review, i) => (
          <div key={i} className="text-center">
            <div className="flex justify-center gap-0.5 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-sm text-taupe font-sans leading-relaxed italic mb-5">
              &ldquo;{review.text}&rdquo;
            </p>
            <p className="text-xs tracking-widest uppercase text-deepbrown font-sans font-medium">
              {review.name}
            </p>
            <p className="text-[11px] text-taupe/70 font-sans mt-1">{review.product}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
