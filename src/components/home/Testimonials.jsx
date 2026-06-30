import Reveal from "@/components/ui/Reveal";
import StarRating from "@/components/ui/StarRating";

const REVIEWS = [
  {
    name: "Maya R.",
    quote:
      "I bought the Vivid Aura cuff first — wore it every day for six months. The finish is still perfect. I've now gifted three sets.",
    role: "Verified buyer",
  },
  {
    name: "Elena V.",
    quote:
      "The huggies are the everyday earring I was looking for. Heavy enough to feel real, light enough to sleep in. Bought them in gold, then silver.",
    role: "Verified buyer",
  },
  {
    name: "Noa K.",
    quote:
      "Packaging alone made me cry. It feels like a real gift, even when it's for yourself. The necklace is exactly the right length.",
    role: "Verified buyer",
  },
];

export default function Testimonials() {
  return (
    <section
      className="bg-ivory-100"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-x py-20 md:py-28">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">From our community</p>
          <h2
            id="testimonials-heading"
            className="h-display mt-3 text-display-md text-espresso-900"
          >
            Worn, gifted, restocked
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 100}>
              <figure className="h-full bg-ivory-50 border border-hairline p-8 md:p-10 flex flex-col">
                <StarRating value={5} showValue={false} size={14} className="text-gold-400" />
                <blockquote className="mt-6 font-serif text-xl md:text-[22px] leading-snug text-espresso-900 text-balance flex-1">
                  "{r.quote}"
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-hairline">
                  <p className="text-sm font-medium text-espresso-900">
                    {r.name}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-espresso-500">
                    {r.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
