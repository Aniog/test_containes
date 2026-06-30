import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "I've been wearing the Golden Sphere Huggies every single day for three months. They haven't tarnished at all and I get compliments constantly. Worth every penny.",
    name: 'Sarah M.',
    location: 'New York',
    rating: 5,
  },
  {
    id: 2,
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is absolutely stunning — delicate but substantial.",
    name: 'Emma L.',
    location: 'London',
    rating: 5,
  },
  {
    id: 3,
    text: "Finally found jewelry that looks expensive but doesn't break the bank. The Majestic Flora necklace is my new favourite piece. Velmora has a customer for life.",
    name: 'Priya K.',
    location: 'Toronto',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-3">Customer Love</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-obsidian">What They're Saying</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div key={t.id} className="flex flex-col">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={12} style={{ color: '#c9a96e', fill: '#c9a96e' }} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-lg font-light text-obsidian leading-relaxed mb-6 flex-1">
                "{t.text}"
              </blockquote>

              {/* Divider */}
              <div className="w-8 h-px bg-gold mb-4" />

              {/* Attribution */}
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-obsidian font-medium">{t.name}</p>
                <p className="font-sans text-xs text-taupe mt-0.5">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
