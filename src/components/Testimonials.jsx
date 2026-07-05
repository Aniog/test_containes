import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "I've been wearing my Golden Sphere Huggies every day for three months and they still look brand new. The quality is incredible for the price. I get compliments constantly!",
    product: "Golden Sphere Huggies",
  },
  {
    id: 2,
    name: "Emma L.",
    rating: 5,
    text: "Bought the Royal Heirloom Set as a gift for my sister's birthday. The packaging was beautiful and she absolutely loved it. Velmora is now my go-to for jewelry gifts.",
    product: "Royal Heirloom Set",
  },
  {
    id: 3,
    name: "Olivia K.",
    rating: 5,
    text: "The Majestic Flora necklace is even more stunning in person. I have sensitive skin and these are the first earrings that don't irritate me. Truly hypoallergenic!",
    product: "Majestic Flora Nectar",
  },
];

export default function Testimonials() {
  return (
    <section className="py-section md:py-section-lg bg-cream-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-overline uppercase text-gold tracking-[0.2em] mb-3">
            Love Letters
          </p>
          <h2
            className="text-display-md text-charcoal-800 mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            What Our Customers Say
          </h2>
          <div className="section-divider" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-soft border border-cream-100 relative"
            >
              <Quote
                size={32}
                className="text-cream-200 absolute top-5 right-6"
                strokeWidth={1}
              />
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="#C8A55A"
                    stroke="#C8A55A"
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <p className="text-body-md text-charcoal-600 leading-relaxed mb-5">
                "{t.text}"
              </p>
              <div className="border-t border-cream-100 pt-4">
                <p className="text-body-sm font-semibold text-charcoal-800">
                  {t.name}
                </p>
                <p className="text-caption text-charcoal-400 mt-0.5">
                  Verified Buyer · {t.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
