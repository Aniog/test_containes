import { Star } from 'lucide-react';

const testimonials = [
  {
    text: 'The quality is truly exceptional for the price. My Golden Sphere Huggies haven\'t left my ears since they arrived — no tarnishing, no irritation. I get compliments daily.',
    name: 'Sophia R.',
  },
  {
    text: 'I bought the Royal Heirloom Set for my sister\'s engagement gift. The packaging was so beautiful she teared up before even opening the box. Velmora is my go-to for gifting now.',
    name: 'Claire M.',
  },
  {
    text: 'Finally, demi-fine jewelry that looks and feels expensive without the anxiety of wearing it. The Majestic Flora necklace is my new signature piece. Warm gold, flawless crystals.',
    name: 'Natalie K.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-24 bg-ivory">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <h2 className="font-serif text-2xl md:text-3xl text-center mb-2 text-[#1A1A1A] tracking-wide">
          What Our Customers Say
        </h2>
        <p className="text-sm text-[#6B6560] text-center mb-10 md:mb-14 font-light">
          Real reviews from real jewelry lovers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="text-center">
              <div className="flex items-center justify-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-[#6B6560] leading-relaxed italic font-light mb-4">
                "{t.text}"
              </p>
              <p className="text-xs uppercase tracking-[0.12em] font-medium text-[#1A1A1A]">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
