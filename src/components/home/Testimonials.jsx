import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie M.",
    text: "The quality is stunning for the price. I wear my huggies every single day and they still look brand new.",
  },
  {
    name: "Emily R.",
    text: "Bought the Royal Heirloom Set as a birthday gift and she absolutely loved it. The packaging felt so premium.",
  },
  {
    name: "Ava L.",
    text: "Quiet luxury exactly as described. The ear cuff is my new signature piece — I get compliments constantly.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight">
            Loved by Our Customers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-cream p-8 md:p-10 text-center border border-stonehair"
            >
              <div className="flex justify-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-taupe leading-relaxed mb-6 italic font-serif text-lg">
                “{t.text}”
              </p>
              <p className="text-xs uppercase tracking-widest text-espresso">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
