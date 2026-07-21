import { Star } from 'lucide-react';

const testimonials = [
  {
    text: 'The quality is absolutely stunning. I\'ve worn my huggies every day for three months and they still look brand new. Can\'t wait to add more pieces to my collection.',
    name: 'Sophia M.',
    product: 'Golden Sphere Huggies',
  },
  {
    text: 'Ordered the Flora necklace for my sister\'s wedding and it was even more beautiful in person. The packaging alone felt like such a luxury experience.',
    name: 'Rachel K.',
    product: 'Majestic Flora Nectar',
  },
  {
    text: 'Finally found demi-fine jewelry that actually feels substantial. The gold tone is warm and rich — it pairs perfectly with my vintage pieces.',
    name: 'Amanda L.',
    product: 'Amber Lace Earrings',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="container-site max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-4">Loved by You</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t) => (
            <div key={t.name} className="text-center">
              <div className="flex items-center justify-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="text-sm text-velmora-warmgray leading-relaxed italic mb-5">"{t.text}"</p>
              <p className="text-xs font-medium tracking-wider uppercase text-velmora-charcoal">{t.name}</p>
              <p className="text-[10px] text-velmora-warmgray/60 mt-0.5">{t.product}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
