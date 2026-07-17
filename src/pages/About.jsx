import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StrkImage from "@/components/ui/StrkImage";
import ScrollReveal from "@/components/ui/ScrollReveal";

export function About() {
  return (
    <div>
      <section
        aria-labelledby="about-heading"
        className="container-content pb-10 pt-12 text-center md:pb-14 md:pt-20"
      >
        <p className="eyebrow">Our Story</p>
        <h1
          id="about-heading"
          className="mx-auto mt-4 max-w-3xl font-serif text-5xl leading-tight text-ink md:text-6xl"
        >
          Jewelry made slowly,
          <span className="block italic text-gold-deep">worn for years.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
          Velmora is a small, independent demi-fine jewelry brand. We design, plate, and finish
          every piece ourselves — in 18K gold over a hypoallergenic base, in small batches, with the
          care that fine jewelry deserves and the price that makes it wearable.
        </p>
      </section>

      <StrkImage>
        <section className="container-content pb-16 md:pb-24">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <ScrollReveal>
              <div className="relative aspect-[4/5] overflow-hidden bg-bone">
                <img
                  data-strk-img-id="about-portrait-1"
                  data-strk-img="[about-quote] [about-body-2] [about-body-1] editorial gold jewelry workshop"
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Hand-finishing a piece of gold jewelry"
                  className="h-full w-full object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <p
                id="about-body-1"
                className="font-serif text-2xl leading-snug text-ink md:text-3xl"
              >
                We started in a small studio with a notebook of sketches, a few spools of chain, and
                a stubborn belief that demi-fine could feel as considered as fine.
              </p>
              <p
                id="about-body-2"
                className="mt-6 text-base leading-relaxed text-ink-soft md:text-[1.0625rem]"
              >
                Every piece is plated in 18K gold over a hypoallergenic brass base, hand-finished,
                and inspected before it reaches you. We make in small batches, in warm metal, with
                quiet details you'll only notice when you're wearing it.
              </p>
              <p
                id="about-quote"
                className="mt-8 max-w-prose font-serif text-2xl italic leading-snug text-ink"
              >
                "Jewelry should feel like the warmest thing you own."
              </p>
              <p className="mt-3 text-sm text-ink-soft">— Anya Velmora, Founder</p>
            </ScrollReveal>
          </div>
        </section>

        <section className="bg-bone py-16 md:py-24">
          <div className="container-content">
            <div className="grid gap-10 md:grid-cols-3">
              {[
                {
                  h: "Made Slowly",
                  p: "Small batches, hand-finished in our studio. Nothing is mass-produced.",
                },
                {
                  h: "Honest Materials",
                  p: "18K gold over hypoallergenic brass. Nickel-free, lead-free, always.",
                },
                {
                  h: "Made to be Worn",
                  p: "Tarnish-resistant coating, designed to live on your skin, in the shower, on the plane.",
                },
              ].map((b, i) => (
                <ScrollReveal key={b.h} delay={i * 100}>
                  <div className="border-t border-hairline pt-6">
                    <h2 className="font-serif text-2xl text-ink md:text-3xl">{b.h}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">{b.p}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <div className="mt-14 text-center">
              <Link
                to="/shop"
                className="group inline-flex items-center gap-2 bg-gold px-9 py-4 cta-label text-ivory transition-all hover:-translate-y-px hover:bg-gold-deep"
              >
                Shop the Collection
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </Link>
            </div>
          </div>
        </section>
      </StrkImage>
    </div>
  );
}

export default About;
