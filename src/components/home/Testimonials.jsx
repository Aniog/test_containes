import { Star } from 'lucide-react';

const reviews = [
  {
    text: 'Absolutely stunning quality. I wear my Golden Sphere Huggies every single day and they still look brand new. The gold tone is perfect — not too yellow, just right.',
    name: 'Sarah M.',
  },
  {
    text: 'Ordered the Majestic Flora Nectar necklace for my sister\'s wedding and it was even more beautiful in person. The packaging alone felt like a luxury experience.',
    name: 'Rachel T.',
  },
  {
    text: 'I\'m very picky about jewelry and Velmora exceeded every expectation. The weight, the finish, the way it catches the light — these pieces feel far more expensive than they are.',
    name: 'Jennifer L.',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding py-20 md:py-28 bg-cream-dark">
      <div className="text-center mb-14">
        <p className="font-sans text-xs tracking-widest uppercase text-taupe mb-4">
          Reviews
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso">
          What Our Customers Say
        </h2>
        <div className="w-12 h-px bg-gold mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
        {reviews.map((review, i) => (
          <div key={i} className="text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="font-serif text-sm md:text-base text-espresso italic leading-relaxed mb-5">
              "{review.text}"
            </p>
            <p className="font-sans text-xs tracking-wider uppercase text-taupe font-medium">
              {review.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
