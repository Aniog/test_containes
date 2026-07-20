import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sophie M.",
    rating: 5,
    text: "I've been wearing the Golden Sphere Huggies every single day for three months. They haven't tarnished at all and I get compliments constantly. Worth every penny.",
  },
  {
    id: 2,
    name: "Isabelle R.",
    rating: 5,
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — delicate but substantial. She hasn't taken it off.",
  },
  {
    id: 3,
    name: "Camille T.",
    rating: 5,
    text: "The Majestic Flora necklace is exactly what I was looking for — not too flashy, not too minimal. It layers beautifully with my other pieces. Velmora has a customer for life.",
  },
];

function StarRow({ rating }) {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-espresso">
            What Our Customers Say
          </h2>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col px-6 md:px-0"
            >
              <StarRow rating={review.rating} />
              <blockquote className="font-cormorant text-lg md:text-xl font-light text-espresso leading-relaxed mb-5 italic">
                "{review.text}"
              </blockquote>
              <div className="mt-auto flex items-center gap-3">
                <div className="w-8 h-px bg-gold" />
                <span className="font-inter text-xs uppercase tracking-[0.15em] text-stone">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-16 hairline" />
      </div>
    </section>
  );
}
