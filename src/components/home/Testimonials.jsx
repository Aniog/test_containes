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
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — delicate but substantial. Velmora is my go-to now.",
    name: 'Priya K.',
    location: 'London',
    rating: 5,
  },
  {
    id: 3,
    text: "The Majestic Flora Nectar is exactly what I was looking for — something that feels special but I can wear to the office. The quality is genuinely impressive for the price.",
    name: 'Camille R.',
    location: 'Paris',
    rating: 5,
  },
];

function StarRating({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} fill="#C9A96E" stroke="none" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-velmora-linen py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14 md:mb-16">
          <p className="font-manrope text-xs tracking-widest-xl uppercase text-velmora-gold mb-3">
            What Our Customers Say
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian">
            Loved by Thousands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-velmora-ivory p-8 md:p-10 flex flex-col gap-5"
            >
              <StarRating count={t.rating} />
              <blockquote className="font-cormorant text-lg font-light text-velmora-obsidian leading-relaxed italic flex-1">
                "{t.text}"
              </blockquote>
              <div className="hairline pt-5">
                <p className="font-manrope text-xs tracking-widest-sm uppercase text-velmora-text-mid">
                  {t.name}
                </p>
                <p className="font-manrope text-xs text-velmora-text-muted mt-0.5">
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
