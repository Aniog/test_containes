import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "I've been wearing the Golden Sphere Huggies every single day for three months. They haven't tarnished at all and I get compliments constantly. Worth every penny.",
    name: 'Isabelle M.',
    location: 'New York, NY',
    rating: 5,
  },
  {
    id: 2,
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — delicate but feels so substantial.",
    name: 'Charlotte R.',
    location: 'London, UK',
    rating: 5,
  },
  {
    id: 3,
    text: "The Majestic Flora Nectar necklace is exactly what I was looking for. It sits perfectly at the collarbone and the crystals catch the light beautifully. Velmora has a customer for life.",
    name: 'Sophia K.',
    location: 'Paris, FR',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-warm-mist p-8 flex flex-col gap-5 border border-stone"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={12} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-cormorant text-lg font-light italic text-charcoal leading-relaxed flex-1">
                "{t.text}"
              </p>

              {/* Attribution */}
              <div className="h-px bg-stone" />
              <div>
                <p className="font-inter text-xs font-medium text-ink">{t.name}</p>
                <p className="font-inter text-[10px] text-bark mt-0.5">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
