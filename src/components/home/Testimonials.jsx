import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sophie M.",
    text: "I've been wearing the Vivid Aura cuff every single day. It's become my signature piece. The quality is incredible for the price — I've had compliments from strangers on the street.",
    product: "Vivid Aura Jewels",
    rating: 5,
  },
  {
    id: 2,
    name: "Claire W.",
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — delicate but substantial. Will be ordering again.",
    product: "Royal Heirloom Set",
    rating: 5,
  },
  {
    id: 3,
    name: "Nadia K.",
    text: "Finally found huggies that don't irritate my ears. The Golden Sphere Huggies are perfect — chunky enough to make a statement but comfortable enough to sleep in. Obsessed.",
    product: "Golden Sphere Huggies",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-ivory py-16 md:py-24 border-t border-warm-gray-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs uppercase tracking-widest text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso font-light">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={12} fill="#C9A96E" stroke="none" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-lg text-espresso font-light leading-relaxed italic mb-5 flex-1">
                "{review.text}"
              </blockquote>

              {/* Attribution */}
              <div className="border-t border-warm-gray-light pt-4">
                <p className="font-sans text-xs uppercase tracking-widest text-espresso font-medium">
                  {review.name}
                </p>
                <p className="font-sans text-xs text-warm-gray mt-0.5">
                  Verified purchase · {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
