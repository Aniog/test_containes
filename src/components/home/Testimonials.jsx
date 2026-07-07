import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "I've been wearing the Golden Sphere Huggies every single day for three months. They haven't tarnished at all and I get compliments constantly. Worth every penny.",
    name: 'Sophie M.',
    location: 'New York',
    rating: 5,
  },
  {
    id: 2,
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is absolutely stunning — delicate but substantial.",
    name: 'Claire W.',
    location: 'London',
    rating: 5,
  },
  {
    id: 3,
    text: "Finally found a jewelry brand that hits the sweet spot between affordable and luxurious. The Majestic Flora necklace is my new signature piece.",
    name: 'Priya S.',
    location: 'Toronto',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-inter text-xs uppercase tracking-widest text-gold mb-3">
            Customer Love
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian">
            What They're Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="flex flex-col p-8 border border-border bg-ivory hover:shadow-md hover:shadow-obsidian/5 transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-gold" fill="#C9A96E" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-cormorant text-lg italic text-obsidian leading-relaxed flex-1">
                "{t.text}"
              </p>

              {/* Attribution */}
              <div className="mt-6 pt-5 border-t border-border">
                <p className="font-inter text-xs uppercase tracking-widest text-obsidian">
                  {t.name}
                </p>
                <p className="font-inter text-xs text-stone mt-0.5">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
