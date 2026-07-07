import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah M.',
    text: 'The Vivid Aura cuff is even more beautiful in person. I wear it every day and the gold hasn\'t faded at all. Received so many compliments!',
  },
  {
    name: 'Elena R.',
    text: 'Bought the Royal Heirloom Set for my sister\'s wedding. The packaging alone made her cry — and the jewelry is stunning. Velmora is my go-to for gifting now.',
  },
  {
    name: 'Jade K.',
    text: 'Finally found gold jewelry that doesn\'t irritate my sensitive ears. The Golden Sphere Huggies are the perfect everyday hoop. I\'m slowly collecting every piece.',
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
      <div className="text-center mb-14">
        <h2 className="font-serif text-3xl lg:text-4xl tracking-wide text-velmora-deep mb-4">
          Loved by You
        </h2>
        <div className="w-12 h-px bg-velmora-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
        {reviews.map((review, i) => (
          <div key={i} className="text-center">
            <div className="flex items-center justify-center gap-0.5 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={14} className="fill-velmora-gold text-velmora-gold" />
              ))}
            </div>
            <p className="text-sm text-velmora-stone leading-relaxed italic mb-4">
              &ldquo;{review.text}&rdquo;
            </p>
            <p className="text-xs tracking-wider uppercase font-medium text-velmora-deep">
              {review.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
