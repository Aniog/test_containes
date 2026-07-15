import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'The Golden Sphere Huggies are genuinely the only earrings I never take off. They still look brand new after six months of daily wear.',
  },
  {
    name: 'Emily R.',
    text: 'Ordered the Royal Heirloom Set for my sister\'s birthday. The presentation, the quality — she cried. Will be back for myself.',
  },
  {
    name: 'Jessica L.',
    text: 'Finally, demi-fine jewelry that feels truly premium without the guilt. The Majestic Flora Nectar gets compliments everywhere I go.',
  },
];

export default function Testimonials() {
  return (
    <section className="container-site py-16 md:py-24">
      <div className="text-center mb-12">
        <span className="accent-badge mb-4">Reviews</span>
        <h2 className="heading-md">Loved by You</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-4xl mx-auto">
        {testimonials.map(({ name, text }) => (
          <div key={name} className="text-center">
            <div className="flex items-center justify-center gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-velmora-accent text-velmora-accent" />
              ))}
            </div>
            <p className="body-text italic mb-4">&ldquo;{text}&rdquo;</p>
            <p className="font-serif text-sm tracking-wide">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
