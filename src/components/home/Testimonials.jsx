import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "I've been wearing the Golden Sphere Huggies every single day for three months. They haven't tarnished at all and I get compliments constantly. Worth every penny.",
    name: 'Sophie M.',
    product: 'Golden Sphere Huggies',
    rating: 5,
  },
  {
    id: 2,
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is absolutely stunning — delicate but substantial.",
    name: 'Priya K.',
    product: 'Royal Heirloom Set',
    rating: 5,
  },
  {
    id: 3,
    text: "The Majestic Flora necklace is exactly what I was looking for — something that looks expensive but won't break the bank. Velmora has a customer for life.",
    name: 'Claire D.',
    product: 'Majestic Flora Nectar',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-widest uppercase text-gold font-medium mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-obsidian font-light">
            What They're Saying
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-linen border border-sand p-8 flex flex-col gap-4">
      {/* Stars */}
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={13} fill="#C9A96E" stroke="#C9A96E" />
        ))}
      </div>

      {/* Quote */}
      <p className="font-serif text-base md:text-lg text-obsidian leading-relaxed italic flex-1">
        "{testimonial.text}"
      </p>

      {/* Attribution */}
      <div className="pt-4 border-t border-sand">
        <p className="font-sans text-sm font-medium text-obsidian">{testimonial.name}</p>
        <p className="font-sans text-xs text-muted mt-0.5">Verified purchase · {testimonial.product}</p>
      </div>
    </div>
  );
}
