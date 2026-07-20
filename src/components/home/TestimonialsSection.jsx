import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "I've worn the Golden Sphere Huggies every single day for three months. They still look brand new. Absolutely obsessed.",
    name: 'Sophie R.',
    location: 'New York',
  },
  {
    id: 2,
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. Stunning quality.",
    name: 'Amara T.',
    location: 'London',
  },
  {
    id: 3,
    text: "Finally found jewelry that doesn't turn my skin green. The Amber Lace earrings are my new signature piece.",
    name: 'Chloe M.',
    location: 'Paris',
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 mb-5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-velmora-gold text-velmora-gold" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-inter text-xs font-medium uppercase tracking-widest text-velmora-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant font-light text-4xl md:text-5xl text-velmora-obsidian">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col">
              <StarRating />
              <blockquote className="font-cormorant font-light text-xl md:text-2xl text-velmora-obsidian leading-relaxed italic mb-6 flex-1">
                "{t.text}"
              </blockquote>
              <div className="border-t border-velmora-stone pt-5">
                <p className="font-inter text-xs font-medium uppercase tracking-widest text-velmora-obsidian">
                  {t.name}
                </p>
                <p className="font-inter text-xs text-velmora-muted mt-1">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
