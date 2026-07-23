import { Star } from 'lucide-react';

const testimonials = [
  {
    text: 'Absolutely stunning quality. The gold finish is so rich and I\'ve worn them daily for months with zero tarnish.',
    name: 'Sophia K.',
    product: 'Golden Sphere Huggies',
  },
  {
    text: 'I bought the Royal Heirloom Set for my sister\'s wedding and she hasn\'t taken it off since. The presentation was beautiful.',
    name: 'Amara L.',
    product: 'Royal Heirloom Set',
  },
  {
    text: 'Finally, demi-fine jewelry that feels truly luxurious. The ear cuff is a conversation starter every time I wear it.',
    name: 'Isabelle R.',
    product: 'Vivid Aura Jewels',
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
      <div className="text-center mb-12">
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 font-sans">Loved by You</p>
        <h2 className="font-serif text-3xl md:text-4xl tracking-wider text-espresso">What Our Customers Say</h2>
        <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="text-center px-4">
            <div className="flex items-center justify-center gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-muted text-sm leading-relaxed mb-4 font-sans italic">"{t.text}"</p>
            <p className="font-serif text-sm tracking-wider text-espresso">{t.name}</p>
            <p className="text-xs text-muted-light mt-1">{t.product}</p>
          </div>
        ))}
      </div>
    </section>
  );
}