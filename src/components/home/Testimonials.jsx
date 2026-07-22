import Reveal from "@/components/Reveal";
import Stars from "@/components/Stars";

const REVIEWS = [
  {
    quote:
      "The Sphere Huggies haven't left my ears since they arrived. They look twice the price and feel like nothing at all.",
    name: "Camille R.",
    detail: "Golden Sphere Huggies",
  },
  {
    quote:
      "I bought the Heirloom Set for my sister's birthday and immediately ordered one for myself. The gift box alone is beautiful.",
    name: "Priya S.",
    detail: "Royal Heirloom Set",
  },
  {
    quote:
      "Sensitive ears, zero irritation — and the gold hasn't faded after months of daily wear. This is my new default gift.",
    name: "Lauren M.",
    detail: "Amber Lace Earrings",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <Reveal className="mb-12 text-center md:mb-16">
        <p className="text-xs tracking-[0.4em] uppercase text-gold">
          Kind Words
        </p>
        <h2 className="mt-4 font-serif text-4xl font-medium text-espresso md:text-5xl">
          From Our Community
        </h2>
      </Reveal>

      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        {REVIEWS.map((review, i) => (
          <Reveal key={review.name} delay={i * 120}>
            <figure className="flex h-full flex-col items-center border-t border-hairline pt-8 text-center">
              <Stars rating={5} size={14} />
              <blockquote className="mt-5 font-serif text-xl italic leading-relaxed text-espresso">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                <p className="text-sm font-semibold tracking-[0.15em] uppercase text-cocoa">
                  {review.name}
                </p>
                <p className="mt-1 text-xs tracking-wide text-taupe">
                  Verified buyer — {review.detail}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
