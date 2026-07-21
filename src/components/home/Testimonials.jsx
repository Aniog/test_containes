import StarRating from "@/components/ui/StarRating";
import Reveal from "@/components/ui/Reveal";

const TESTIMONIALS = [
  {
    quote:
      "The huggies haven't left my ears since they arrived. They look three times the price — my jeweler asked where they were from.",
    name: "Amelia R.",
    piece: "Golden Sphere Huggies",
  },
  {
    quote:
      "Bought the Heirloom Set for my sister's birthday. The box, the ribbon, the note — she thought I'd spent a fortune.",
    name: "Sofia M.",
    piece: "Royal Heirloom Set",
  },
  {
    quote:
      "I have sensitive ears and usually can't do plated jewelry. Three months of daily wear and zero irritation. Genuinely shocked.",
    name: "Priya K.",
    piece: "Vivid Aura Jewels",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <Reveal className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
            Kind Words
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-noir md:text-5xl">
            Treasured by Thousands
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="flex h-full flex-col items-center border-t border-line pt-8 text-center md:px-4">
                <StarRating rating={5} size={14} />
                <blockquote className="mt-5 font-serif text-lg italic leading-relaxed text-noir md:text-xl">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-noir">
                    {t.name}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-taupe">
                    Verified · {t.piece}
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
