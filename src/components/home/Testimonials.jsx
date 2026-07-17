import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    initial: "S",
    rating: 5,
    text: "The quality is incredible for the price. I wear my Golden Sphere Huggies every day and they still look brand new.",
  },
  {
    id: 2,
    name: "Emily R.",
    initial: "E",
    rating: 5,
    text: "Bought the Royal Heirloom Set as a gift for my sister — she hasn't taken it off since. Packaging is beautiful too.",
  },
  {
    id: 3,
    name: "Jessica L.",
    initial: "J",
    rating: 5,
    text: "Finally, gold jewelry that doesn't irritate my skin. The hypoallergenic claim is real. Will definitely order again.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-velmora-cream">
      <div className="container-velmora">
        <h2 className="font-serif text-2xl sm:text-3xl text-velmora-charcoal text-center mb-10 sm:mb-12">
          Loved by Our Community
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 sm:p-8 border border-border"
            >
              {/* Stars */}
              <div className="flex text-accent mb-4">
                {Array.from({ length: t.rating }, (_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-foreground leading-relaxed mb-6">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-sm font-medium">
                  {t.initial}
                </div>
                <span className="text-sm font-medium">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
