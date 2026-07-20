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
    text: "Ordered the Royal Heirloom Set as a birthday gift for my best friend. The packaging alone made her cry. The jewelry is stunning — delicate but substantial. She loves it.",
    name: 'Camille R.',
    location: 'London',
    rating: 5,
  },
  {
    id: 3,
    text: "The Majestic Flora Nectar is exactly what I was looking for — feminine without being too precious. It layers beautifully with my other pieces. Fast shipping too!",
    name: 'Isabelle T.',
    location: 'Paris',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold mb-3">Customer Love</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ink">What They're Saying</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div key={t.id} className="flex flex-col gap-5 p-8 bg-cream border border-linen">
              {/* Stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={12} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg font-light text-ink leading-relaxed italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="mt-auto pt-4 border-t border-linen">
                <p className="font-sans text-xs tracking-widest uppercase text-ink font-medium">{t.name}</p>
                <p className="font-sans text-xs text-subtle mt-0.5">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
