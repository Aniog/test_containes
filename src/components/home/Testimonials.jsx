import StarRating from "@/components/ui/StarRating";
import Reveal from "@/components/ui/Reveal";

const REVIEWS = [
  {
    quote:
      "The huggies haven't left my ears since they arrived. They still look brand new after months of daily wear.",
    name: "Sophie M.",
    piece: "Golden Sphere Huggies",
  },
  {
    quote:
      "Bought the Heirloom Set for my sister's birthday — the gift box alone made her gasp. She's worn it every day since.",
    name: "Amara K.",
    piece: "Royal Heirloom Set",
  },
  {
    quote:
      "Finally, gold jewelry that doesn't irritate my skin. The Amber Lace earrings get compliments everywhere I go.",
    name: "Elena R.",
    piece: "Amber Lace Earrings",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
            4.9 / 5 — 2,400+ reviews
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium text-espresso md:text-5xl">
            Loved & Worn Daily
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={i * 100}>
              <blockquote className="flex h-full flex-col border border-champagne bg-cream p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(34,25,16,0.25)] md:p-9">
                <StarRating rating={5} size={14} />
                <p className="mt-5 flex-1 font-display text-xl font-medium italic leading-relaxed text-espresso">
                  “{review.quote}”
                </p>
                <footer className="mt-6 border-t border-champagne pt-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso">
                    {review.name}
                  </p>
                  <p className="mt-0.5 text-xs text-taupe">
                    Verified buyer · {review.piece}
                  </p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
