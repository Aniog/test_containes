import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amelia L.",
    text: "The quality is incredible for the price. I wear my huggies literally every day and they still look brand new.",
  },
  {
    name: "Sofia M.",
    text: "Beautiful packaging and even more beautiful jewelry. I bought the set as a gift and ended up ordering one for myself.",
  },
  {
    name: "Elena R.",
    text: "Finally, demi-fine jewelry that feels elevated but not intimidating. Obsessed with the ear cuff.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-velmora-gold">
          Reviews
        </p>
        <h2 className="mt-3 font-serif text-3xl tracking-wide md:text-4xl">
          Loved by Real Women
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="border border-velmora-sand bg-white p-8 transition-shadow duration-300 hover:shadow-sm"
          >
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-velmora-gold text-velmora-gold"
                />
              ))}
            </div>
            <p className="mt-5 text-velmora-charcoal/80 leading-relaxed">
              "{item.text}"
            </p>
            <p className="mt-6 text-sm font-medium uppercase tracking-widest">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
