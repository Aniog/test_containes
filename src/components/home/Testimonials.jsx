import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "I've been wearing the Golden Sphere Huggies every single day for three months. They haven't tarnished at all and I get compliments constantly. Worth every penny.",
    name: 'Sophia R.',
    product: 'Golden Sphere Huggies',
    rating: 5,
  },
  {
    id: 2,
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — looks so much more expensive than it is.",
    name: 'Camille T.',
    product: 'Royal Heirloom Set',
    rating: 5,
  },
  {
    id: 3,
    text: "The Majestic Flora Nectar necklace is exactly what I was looking for. Delicate but eye-catching. Shipping was fast and the little pouch it came in is so elegant.",
    name: 'Isabelle M.',
    product: 'Majestic Flora Nectar',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-velmora-obsidian py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-velmora-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-velmora-cream tracking-wide">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-velmora-charcoal p-8 border border-velmora-gold/10 hover:border-velmora-gold/30 transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-velmora-gold fill-velmora-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-base font-light italic text-velmora-cream/80 leading-relaxed mb-6">
                "{t.text}"
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-velmora-gold/30 mb-5" />

              {/* Customer */}
              <div>
                <p className="font-sans text-xs font-medium tracking-[0.15em] uppercase text-velmora-cream">
                  {t.name}
                </p>
                <p className="font-sans text-xs text-velmora-cream/40 mt-1">
                  Verified Purchase · {t.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
