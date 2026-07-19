import { Star } from "lucide-react";

const reviews = [
  {
    quote:
      "I wear the Sienna hoops almost every day — they go with everything and haven't lost their shine. The packaging felt like opening a present.",
    name: "Eleanor V.",
    role: "Verified Buyer",
  },
  {
    quote:
      "Bought the Royal Heirloom set for my sister's birthday. She literally gasped. It looks twice the price.",
    name: "Maya R.",
    role: "Verified Buyer",
  },
  {
    quote:
      "Finally, jewelry that feels like me — refined without trying too hard. The Maren pendant is on rotation.",
    name: "Sienna T.",
    role: "Verified Buyer",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1 text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4" fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="text-center mb-14 md:mb-20">
        <span className="eyebrow mb-3 block">What They're Saying</span>
        <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-2xl mx-auto">
          Worn, loved, kept.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-10 md:gap-12">
        {reviews.map((r) => (
          <figure key={r.name} className="flex flex-col">
            <Stars />
            <blockquote className="mt-5 font-serif text-xl md:text-2xl leading-snug text-espresso italic">
              "{r.quote}"
            </blockquote>
            <figcaption className="mt-6 pt-5 border-t border-taupe">
              <p className="font-medium text-sm">{r.name}</p>
              <p className="text-xs text-mocha mt-0.5">{r.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
