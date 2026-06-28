import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sophie M.",
    rating: 5,
    text: "I've been wearing the Golden Sphere Huggies every single day for three months. They haven't tarnished at all and I get compliments constantly. Worth every penny.",
    product: "Golden Sphere Huggies",
  },
  {
    id: 2,
    name: "Isabelle R.",
    rating: 5,
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — delicate but substantial. Velmora is my go-to now.",
    product: "Royal Heirloom Set",
  },
  {
    id: 3,
    name: "Camille T.",
    rating: 5,
    text: "The Majestic Flora Nectar is exactly what I was looking for — not too precious, not too casual. It layers beautifully with my other pieces. Fast shipping too!",
    product: "Majestic Flora Nectar",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream border-t border-border-warm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-inter text-xs uppercase tracking-widest text-gold mb-3">
            Customer Love
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-dark">
            What They're Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col gap-5 p-8 bg-white border border-border-warm"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-cormorant text-lg font-light text-dark leading-relaxed italic flex-1">
                "{review.text}"
              </p>

              {/* Attribution */}
              <div className="border-t border-border-warm pt-4">
                <p className="font-inter text-xs font-medium text-dark uppercase tracking-widest">
                  {review.name}
                </p>
                <p className="font-inter text-xs text-stone-warm mt-0.5">
                  {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
