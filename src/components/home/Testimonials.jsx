import { Star } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    name: "Amélie W.",
    rating: 5,
    text: "I've been wearing the Golden Sphere Huggies every single day for three months. They haven't tarnished at all and I get compliments constantly. Worth every penny.",
  },
  {
    id: 2,
    name: "Sofia R.",
    rating: 5,
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — delicate but substantial. Velmora is my go-to now.",
  },
  {
    id: 3,
    name: "Nadia K.",
    rating: 5,
    text: "The Majestic Flora Nectar necklace is exactly what I was looking for. It photographs beautifully and the quality feels so much more expensive than the price. Obsessed.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-parchment py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velvet tracking-wide">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-ivory border border-champagne p-7 md:p-8 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className="fill-gold text-gold"
                    strokeWidth={0}
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="font-serif text-base font-light text-bark leading-relaxed italic flex-1">
                "{review.text}"
              </p>

              {/* Name */}
              <p className="font-sans text-xs tracking-widest uppercase text-driftwood">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
