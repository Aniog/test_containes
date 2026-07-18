import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophia M.',
    rating: 5,
    text: "I wear the Golden Sphere Huggies every single day. They're the perfect weight — substantial enough to feel luxurious, light enough to forget you're wearing them.",
  },
  {
    id: 2,
    name: 'Isabelle R.',
    rating: 5,
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — looks far more expensive than it is.",
  },
  {
    id: 3,
    name: 'Camille T.',
    rating: 5,
    text: "The Majestic Flora Nectar necklace gets compliments every time I wear it. The colors are so rich and the chain is delicate but strong. Absolutely obsessed.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-inter text-xs uppercase tracking-widest text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-espresso mb-4">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-cormorant text-lg md:text-xl font-light text-espresso leading-relaxed mb-6 flex-1">
                "{review.text}"
              </blockquote>

              {/* Divider */}
              <div className="w-8 h-px bg-gold mb-4" />

              {/* Name */}
              <p className="font-inter text-xs uppercase tracking-widest text-stone">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
