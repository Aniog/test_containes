import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "I've been wearing the Golden Sphere Huggies every single day for three months. They haven't tarnished at all and I get compliments constantly. Worth every penny.",
    name: 'Sophie M.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — delicate but substantial. Velmora is my go-to now.",
    name: 'Camille R.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    text: "The Majestic Flora Nectar necklace is exactly what I was looking for — colorful but not costume-y. It layers beautifully with my other pieces. Fast shipping too!",
    name: 'Isabelle T.',
    product: 'Majestic Flora Nectar',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-14">
          <p className="font-manrope text-xs font-medium tracking-[0.2em] uppercase text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-ink">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div key={t.id} className="bg-cream p-8 md:p-10 flex flex-col">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} style={{ color: '#C9A96E', fill: '#C9A96E' }} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-cormorant text-lg font-light text-ink leading-relaxed flex-1 mb-6">
                "{t.text}"
              </blockquote>

              {/* Divider */}
              <div className="w-8 h-px bg-gold mb-5" />

              {/* Author */}
              <div>
                <p className="font-manrope text-sm font-semibold text-ink">{t.name}</p>
                <p className="font-manrope text-xs text-mist mt-0.5">Verified Purchase · {t.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
