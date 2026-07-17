import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "I've been wearing the Golden Sphere Huggies every single day for three months. They haven't tarnished at all and I get compliments constantly. Worth every penny.",
    name: 'Sophie M.',
    location: 'London, UK',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is absolutely stunning — delicate but substantial.",
    name: 'Camille R.',
    location: 'Paris, FR',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    text: "The Majestic Flora necklace is exactly what I was looking for — something that feels special but I can wear to the office. The quality is incredible for the price.",
    name: 'Isabelle T.',
    location: 'New York, US',
    product: 'Majestic Flora Nectar',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs uppercase tracking-widest text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-obsidian">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-base md:text-lg font-light text-obsidian leading-relaxed italic flex-1">
                "{t.text}"
              </blockquote>

              {/* Divider */}
              <div className="w-8 h-px bg-gold my-5" />

              {/* Attribution */}
              <div>
                <p className="font-sans text-sm font-semibold text-obsidian">{t.name}</p>
                <p className="font-sans text-xs text-taupe mt-0.5">{t.location}</p>
                <p className="font-sans text-xs uppercase tracking-widest text-gold mt-1">
                  {t.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
