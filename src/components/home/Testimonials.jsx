import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "I've been wearing the Golden Sphere Huggies every single day for three months. They haven't tarnished at all and I get compliments constantly. Worth every penny.",
    name: 'Sophia R.',
    location: 'New York',
  },
  {
    id: 2,
    text: "Ordered the Royal Heirloom Set as a birthday gift for my best friend. The packaging alone made her cry. The jewelry is absolutely stunning in person.",
    name: 'Camille T.',
    location: 'London',
  },
  {
    id: 3,
    text: "Finally found a brand that delivers on the 'demi-fine' promise. The Majestic Flora necklace is delicate but feels substantial. I'm obsessed.",
    name: 'Isabelle M.',
    location: 'Paris',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-[10px] tracking-widest3 uppercase text-velmora-gold mb-3">Customer Love</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-black">What They're Saying</h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div key={t.id} className="bg-velmora-cream p-8 border border-velmora-gold-light/60">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} strokeWidth={0} style={{ fill: '#c9a96e' }} />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-base italic text-velmora-black leading-relaxed mb-6">
                "{t.text}"
              </p>

              {/* Attribution */}
              <div className="border-t border-velmora-gold-light pt-4">
                <p className="font-sans text-xs font-medium tracking-wider text-velmora-black">{t.name}</p>
                <p className="font-sans text-[11px] text-velmora-stone mt-0.5">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
