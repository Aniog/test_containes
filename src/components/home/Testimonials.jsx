import React from "react";
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
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — delicate but substantial. She hasn't taken it off.",
    product: "Royal Heirloom Set",
  },
  {
    id: 3,
    name: "Camille T.",
    rating: 5,
    text: "The Majestic Flora Nectar is exactly what I was looking for — something that feels special but isn't precious. I wear it to work, on dates, everywhere. Absolutely love it.",
    product: "Majestic Flora Nectar",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream border-t border-stone">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-espresso">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={12} fill="#B8965A" stroke="none" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-cormorant text-lg font-light text-espresso leading-relaxed italic flex-1 mb-6">
                "{review.text}"
              </blockquote>

              {/* Divider */}
              <div className="w-8 h-px bg-gold mb-4" />

              {/* Attribution */}
              <div>
                <p className="font-inter text-xs font-medium text-espresso uppercase tracking-[0.1em]">
                  {review.name}
                </p>
                <p className="font-inter text-xs text-taupe mt-0.5">
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
