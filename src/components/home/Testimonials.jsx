import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "I've been wearing the Golden Sphere Huggies every single day for three months. They haven't tarnished at all and I get compliments constantly. Worth every penny.",
    name: 'Sophie M.',
    location: 'London, UK',
    rating: 5,
  },
  {
    id: 2,
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — delicate but feels so substantial.",
    name: 'Camille R.',
    location: 'Paris, FR',
    rating: 5,
  },
  {
    id: 3,
    text: "Finally found a jewelry brand that hits the sweet spot between affordable and luxurious. The Majestic Flora Nectar is my new favorite piece. Shipping was incredibly fast too.",
    name: 'Ava T.',
    location: 'New York, US',
    rating: 5,
  },
];

function StarRow() {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={12}
          style={{ color: '#C9A96E', fill: '#C9A96E' }}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 md:py-28 border-t border-linen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink font-light">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <StarRow />
            <span className="font-sans text-sm text-ink-muted">4.9 out of 5 · 462 reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-parchment p-8 border border-linen hover:border-gold/30 transition-colors duration-300"
            >
              <StarRow />
              <blockquote className="font-serif text-lg text-ink font-light leading-relaxed mt-4 italic">
                "{t.text}"
              </blockquote>
              <div className="mt-6 pt-5 border-t border-linen flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="font-serif text-sm text-gold-dark font-medium">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-sans text-sm font-medium text-ink">{t.name}</p>
                  <p className="font-sans text-xs text-ink-faint">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
