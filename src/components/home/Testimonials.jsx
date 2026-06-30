import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "I've been wearing the Vivid Aura ear cuff every single day for three months. It hasn't tarnished at all and I get compliments constantly. Worth every penny.",
    name: 'Sophie M.',
    location: 'New York',
    rating: 5,
  },
  {
    id: 2,
    text: "Bought the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — delicate but feels so substantial.",
    name: 'Claire W.',
    location: 'London',
    rating: 5,
  },
  {
    id: 3,
    text: "Finally found huggies that actually hug! The Golden Sphere Huggies are perfect. Comfortable, beautiful, and they go with absolutely everything.",
    name: 'Priya K.',
    location: 'Toronto',
    rating: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} className="fill-gold text-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-manrope text-xs tracking-[0.2em] uppercase text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-cream px-8 py-8 border border-linen hover:border-gold/30 transition-colors duration-300"
            >
              <Stars count={t.rating} />
              <p className="font-cormorant text-lg font-light text-obsidian leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-linen flex items-center justify-center">
                  <span className="font-cormorant text-sm font-medium text-text-secondary">
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <p className="font-manrope text-xs font-medium text-obsidian">{t.name}</p>
                  <p className="font-manrope text-[10px] text-text-muted">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
