import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "I've been wearing the Golden Sphere Huggies every single day for three months. They haven't tarnished at all and I get compliments constantly. Worth every penny.",
    name: 'Sophia R.',
    location: 'New York',
    rating: 5,
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — looks so much more expensive than it is.",
    name: 'Camille T.',
    location: 'London',
    rating: 5,
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    text: "Finally found a jewelry brand that gets it. The Majestic Flora Nectar necklace is exactly what I was looking for — delicate but statement-making. Fast shipping too.",
    name: 'Isabelle M.',
    location: 'Paris',
    rating: 5,
    product: 'Majestic Flora Nectar',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-velmora-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-velmora-gold font-medium mb-3">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-obsidian tracking-wide">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-velmora-linen p-8 md:p-10 border border-velmora-stone/10 hover:border-velmora-gold/30 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={12} className="text-velmora-gold fill-velmora-gold" strokeWidth={1} />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-base md:text-lg font-light text-velmora-obsidian leading-relaxed italic mb-6">
                "{t.text}"
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-velmora-gold mb-5" />

              {/* Customer */}
              <div>
                <p className="text-xs tracking-[0.15em] uppercase font-medium text-velmora-obsidian">
                  {t.name}
                </p>
                <p className="text-xs text-velmora-mist mt-0.5 font-light">{t.location}</p>
                <p className="text-[10px] text-velmora-gold mt-1 tracking-wide">Purchased: {t.product}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="text-velmora-gold fill-velmora-gold" strokeWidth={1} />
            ))}
          </div>
          <p className="text-sm text-velmora-mist font-light">
            <span className="text-velmora-obsidian font-medium">4.8 out of 5</span> — based on 524 reviews
          </p>
        </div>
      </div>
    </section>
  );
}
