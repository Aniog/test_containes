import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "I've been wearing the Vivid Aura ear cuff every single day for three months. It hasn't tarnished at all and I get compliments constantly. Worth every penny.",
    name: 'Sophie M.',
    product: 'Vivid Aura Jewels',
    rating: 5,
  },
  {
    id: 2,
    text: "Bought the Royal Heirloom Set as a birthday gift for my sister and she absolutely loved it. The packaging is so beautiful — it felt genuinely luxurious.",
    name: 'Camille R.',
    product: 'Royal Heirloom Set',
    rating: 5,
  },
  {
    id: 3,
    text: "The Golden Sphere Huggies are my new everyday earrings. They're the perfect weight — substantial enough to feel special but light enough to forget you're wearing them.",
    name: 'Isabelle T.',
    product: 'Golden Sphere Huggies',
    rating: 5,
  },
];

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-sans tracking-widest uppercase text-gold mb-2">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl text-obsidian font-light">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-cream border border-linen p-7 md:p-8 flex flex-col gap-4"
            >
              <StarRow />
              <blockquote className="font-serif text-base md:text-lg text-obsidian font-light leading-relaxed italic flex-1">
                "{t.text}"
              </blockquote>
              <div className="border-t border-linen pt-4">
                <p className="text-sm font-sans font-medium text-obsidian">{t.name}</p>
                <p className="text-xs font-sans text-muted mt-0.5">Verified Purchase · {t.product}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust stats */}
        <div className="mt-12 md:mt-16 grid grid-cols-3 gap-4 border-t border-linen pt-10">
          {[
            { value: '4.9', label: 'Average Rating' },
            { value: '2,400+', label: 'Happy Customers' },
            { value: '98%', label: 'Would Recommend' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl md:text-4xl text-gold font-light">{stat.value}</p>
              <p className="text-xs font-sans uppercase tracking-wide text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
