import Stars from "@/components/ui/Stars";
import { SectionTitle } from "@/components/ui/SectionTitle";

const REVIEWS = [
  {
    name: "Maya K.",
    rating: 5,
    text: "I bought the Majestic Flora Nectar for my sister's birthday — she hasn't taken it off. The packaging alone felt like a gift.",
    piece: "Majestic Flora Nectar",
  },
  {
    name: "Noor V.",
    rating: 5,
    text: "I've been burned by plating before. Three months in, the huggies still look new. The weight is the closest I've felt to solid gold at this price.",
    piece: "Golden Sphere Huggies",
  },
  {
    name: "Aria F.",
    rating: 5,
    text: "Quietly the most complimented piece in my stack. The cuff catches light from every angle, and I forget I'm wearing it.",
    piece: "Vivid Aura Jewels",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-editorial px-5 md:px-10">
        <div className="mb-12 md:mb-16 flex flex-col items-center text-center">
          <SectionTitle
            eyebrow="Reviews"
            title="Loved, worn, returned to"
            subtitle="From the women who reach for Velmora first."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {REVIEWS.map((r, i) => (
            <figure
              key={r.name}
              className="flex flex-col gap-4 p-8 md:p-10 bg-cream-warm border border-hairline"
            >
              <Stars value={r.rating} size={14} />
              <blockquote className="font-display text-xl md:text-2xl text-ink leading-snug italic">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-auto pt-4 border-t border-hairline flex items-baseline justify-between">
                <span className="eyebrow text-[0.7rem] text-ink">{r.name}</span>
                <span className="text-xs text-muted">on the {r.piece}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
