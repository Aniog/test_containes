import { Stars } from "@/components/shared/Stars";

const REVIEWS = [
  {
    name: "Amelia R.",
    stars: 5,
    quote:
      "The Sphere Huggies are unreal — substantial but light. I haven't taken them off since they arrived.",
    product: "Golden Sphere Huggies",
  },
  {
    name: "Sloane K.",
    stars: 5,
    quote:
      "Bought the Heirloom Set as a gift and now I want one for myself. The packaging alone made me cry.",
    product: "Royal Heirloom Set",
  },
  {
    name: "Jules M.",
    stars: 5,
    quote:
      "Quiet, considered, and clearly made with care. Velmora is the kind of brand you want to keep finding.",
    product: "Majestic Flora Nectar",
  },
];

export function HomeTestimonials() {
  return (
    <section className="bg-bone px-6 md:px-10 lg:px-16 py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[10px] uppercase tracking-wider3 text-gold-deep mb-3">
            The Velmora community
          </p>
          <h2 className="font-serif text-ink text-3xl md:text-5xl font-light leading-tight">
            Kind words
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col items-center text-center px-4 md:px-6 py-10 border border-hairline bg-ivory"
            >
              <Stars value={r.stars} size="lg" />
              <blockquote className="mt-6 font-serif text-ink text-lg md:text-xl leading-relaxed italic font-light">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6">
                <p className="text-[11px] uppercase tracking-wider2 text-ink font-medium">
                  {r.name}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-wider3 text-muted">
                  on the {r.product}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
