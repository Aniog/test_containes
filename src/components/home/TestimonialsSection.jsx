import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sophie M.',
    rating: 5,
    text: 'I wear the Golden Sphere Huggies every single day. They\'re the perfect weight — substantial enough to feel luxurious, light enough to forget you\'re wearing them.',
  },
  {
    id: 2,
    name: 'Isabelle R.',
    rating: 5,
    text: 'Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — looks far more expensive than it is.',
  },
  {
    id: 3,
    name: 'Camille T.',
    rating: 5,
    text: 'The Majestic Flora Nectar is everything. I\'ve gotten so many compliments. Velmora has completely replaced my old jewelry brands.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-ivory border-t border-linen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif font-medium text-4xl md:text-5xl text-espresso">
            What They're Saying
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-linen p-8 flex flex-col gap-5"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-gold fill-gold" />
                ))}
              </div>
              {/* Quote */}
              <p className="font-serif text-lg text-espresso leading-relaxed flex-1">
                "{t.text}"
              </p>
              {/* Name */}
              <p className="font-sans text-xs font-medium uppercase tracking-widest text-taupe">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
