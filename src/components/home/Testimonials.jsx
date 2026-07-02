import { StarRating } from '@/components/ui/StarRating';

const testimonials = [
  {
    id: 1,
    text: "I've been wearing the Golden Sphere Huggies every single day for three months. They haven't tarnished at all and I get compliments constantly. Worth every penny.",
    name: 'Sophie M.',
    location: 'New York',
    rating: 5,
  },
  {
    id: 2,
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — delicate but substantial. She loves it.",
    name: 'Claire W.',
    location: 'London',
    rating: 5,
  },
  {
    id: 3,
    text: "Finally found a jewelry brand that delivers on its promises. The Majestic Flora necklace is exactly as beautiful in person as in the photos. Fast shipping too.",
    name: 'Priya R.',
    location: 'Toronto',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-3">Reviews</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-velmora-ink">What They Say</h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div key={t.id} className="flex flex-col">
              {/* Stars */}
              <div className="mb-5">
                <StarRating rating={t.rating} size={13} />
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-lg font-light text-velmora-ink leading-relaxed italic flex-1 mb-6">
                "{t.text}"
              </blockquote>

              {/* Divider */}
              <div className="w-8 h-px bg-velmora-gold mb-4" />

              {/* Attribution */}
              <div>
                <p className="font-sans text-sm font-medium text-velmora-ink">{t.name}</p>
                <p className="font-sans text-xs text-velmora-subtle mt-0.5">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
