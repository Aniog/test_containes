import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "I've been wearing the Golden Sphere Huggies every single day for three months. They haven't tarnished at all and I get compliments constantly. Worth every penny.",
    name: 'Sophie M.',
    location: 'London, UK',
    rating: 5,
  },
  {
    id: 2,
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry — it felt so luxurious. The jewelry is absolutely stunning.",
    name: 'Camille R.',
    location: 'Paris, France',
    rating: 5,
  },
  {
    id: 3,
    text: "Finally found a jewelry brand that hits the sweet spot between quality and price. The Majestic Flora necklace is delicate, beautiful, and feels genuinely premium.",
    name: 'Ava T.',
    location: 'New York, USA',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-velvet py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest uppercase text-champagne mb-3 font-medium">
            Customer Love
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-mist font-light">
            What They're Saying
          </h2>
          <div className="w-12 h-px bg-champagne mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-charcoal p-8 md:p-10 space-y-5 relative"
            >
              {/* Quote mark */}
              <span className="font-serif text-6xl text-champagne/20 leading-none absolute top-4 left-6 select-none">
                "
              </span>
              {/* Stars */}
              <div className="flex gap-1 pt-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={12} className="text-champagne fill-champagne" />
                ))}
              </div>
              {/* Text */}
              <p className="font-serif text-base md:text-lg text-mist/80 font-light leading-relaxed italic">
                "{t.text}"
              </p>
              {/* Author */}
              <div className="pt-2 border-t hairline">
                <p className="font-sans text-xs tracking-widest uppercase text-champagne font-semibold">
                  {t.name}
                </p>
                <p className="font-sans text-xs text-stone mt-0.5">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
