import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "I've been wearing the Golden Sphere Huggies every single day for three months. They haven't tarnished at all and I get compliments constantly. Worth every penny.",
    name: 'Sophie M.',
    location: 'London, UK',
    product: 'Golden Sphere Huggies',
    rating: 5,
  },
  {
    id: 2,
    text: "Ordered the Royal Heirloom Set as a birthday gift for my best friend. The packaging alone made her cry. The jewelry is absolutely stunning — delicate but substantial.",
    name: 'Camille R.',
    location: 'Paris, France',
    product: 'Royal Heirloom Set',
    rating: 5,
  },
  {
    id: 3,
    text: "The Majestic Flora Nectar necklace is the most beautiful piece I own. The crystals catch the light in the most magical way. I wear it to everything.",
    name: 'Priya K.',
    location: 'New York, USA',
    product: 'Majestic Flora Nectar',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest font-sans text-gold mb-3">
            Customer Love
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-ink">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col gap-5 p-8 bg-cream border border-parchment"
            >
              {/* Stars */}
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={12}
                    className="text-gold fill-gold"
                    strokeWidth={0}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-base font-light text-ink leading-relaxed italic flex-1">
                "{t.text}"
              </blockquote>

              {/* Attribution */}
              <div className="border-t border-parchment pt-5">
                <p className="text-xs uppercase tracking-widest font-sans text-ink font-medium">
                  {t.name}
                </p>
                <p className="text-[10px] font-sans text-whisper mt-0.5">{t.location}</p>
                <p className="text-[10px] font-sans text-gold mt-1 uppercase tracking-wide">
                  Purchased: {t.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
