import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "I've been wearing my Vivid Aura cuff every single day for three months. It still looks brand new. The quality is genuinely impressive for the price point.",
    name: 'Sophie M.',
    location: 'London, UK',
    rating: 5,
  },
  {
    id: 2,
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. She hasn't taken the necklace off since.",
    name: 'Camille R.',
    location: 'Paris, FR',
    rating: 5,
  },
  {
    id: 3,
    text: "Finally found huggies that actually hug! The Golden Sphere Huggies are the perfect weight — not too heavy, not too light. Absolute perfection.",
    name: 'Aisha T.',
    location: 'New York, US',
    rating: 5,
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} fill="#b8965a" className="text-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="bg-cream-200 p-8 flex flex-col gap-4">
              <Stars count={t.rating} />
              <p className="font-serif text-lg font-light italic text-charcoal leading-relaxed flex-1">
                "{t.text}"
              </p>
              <div className="pt-4 border-t border-divider">
                <p className="font-sans text-xs font-medium text-charcoal tracking-wide">{t.name}</p>
                <p className="font-sans text-xs text-charcoal-muted mt-0.5">{t.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 border-t border-divider pt-12">
          {[
            { value: '4.9', label: 'Average Rating' },
            { value: '12,000+', label: 'Happy Customers' },
            { value: '98%', label: 'Would Recommend' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl md:text-4xl font-light text-charcoal">{stat.value}</p>
              <p className="font-sans text-xs tracking-widest uppercase text-charcoal-muted mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
