import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sophia M.",
    rating: 5,
    text: "I've been wearing the Golden Sphere Huggies every single day for three months. They haven't tarnished at all and I get compliments constantly. Worth every penny.",
    product: "Golden Sphere Huggies",
  },
  {
    id: 2,
    name: "Claire W.",
    rating: 5,
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — delicate but substantial. Velmora has a customer for life.",
    product: "Royal Heirloom Set",
  },
  {
    id: 3,
    name: "Natalie R.",
    rating: 5,
    text: "The Majestic Flora Nectar necklace is exactly what I was looking for — colorful but not loud, special but wearable. It layers beautifully with my other pieces.",
    product: "Majestic Flora Nectar",
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={12} fill="#C9A96E" stroke="none" />
    ))}
  </div>
);

const Testimonials = () => (
  <section className="bg-cream py-20 md:py-28 border-t border-warm-gray-light">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-12">
        <p className="font-inter text-xs tracking-widest uppercase text-gold mb-2">
          Reviews
        </p>
        <h2 className="font-cormorant text-4xl md:text-5xl text-espresso font-light">
          What Our Customers Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {reviews.map((review) => (
          <div key={review.id} className="flex flex-col">
            <Stars count={review.rating} />
            <blockquote className="font-cormorant text-lg md:text-xl text-espresso font-light leading-relaxed mt-4 mb-5 italic">
              "{review.text}"
            </blockquote>
            <div className="mt-auto pt-4 border-t border-warm-gray-light">
              <p className="font-inter text-xs tracking-widest uppercase text-espresso">
                {review.name}
              </p>
              <p className="font-inter text-xs text-warm-gray mt-0.5">
                Verified purchase · {review.product}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
