import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "I've been wearing the Golden Sphere Huggies every single day for three months. They haven't tarnished at all and I get compliments constantly. Worth every penny.",
    name: 'Sophia M.',
    location: 'New York',
    rating: 5,
  },
  {
    id: 2,
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — looks so much more expensive than it is.",
    name: 'Claire W.',
    location: 'London',
    rating: 5,
  },
  {
    id: 3,
    text: "Finally found a jewelry brand that gets it. The Majestic Flora Nectar is delicate but makes a statement. Fast shipping, beautiful packaging, and the quality is exceptional.",
    name: 'Maya R.',
    location: 'Paris',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-3">What They Say</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ivory font-light">Loved by Thousands</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="bg-obsidian-soft p-8 flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={12} fill="#C9A96E" className="text-gold" />
                ))}
              </div>
              {/* Quote */}
              <p className="font-serif text-base md:text-lg text-ivory/90 font-light leading-relaxed italic flex-1 mb-6">
                "{t.text}"
              </p>
              {/* Author */}
              <div className="border-t border-obsidian pt-5">
                <p className="font-sans text-xs tracking-widest uppercase text-gold">{t.name}</p>
                <p className="font-sans text-xs text-taupe-light mt-1">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
