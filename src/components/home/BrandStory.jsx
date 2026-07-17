import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StrkImage from "@/components/ui/StrkImage";
import ScrollReveal from "@/components/ui/ScrollReveal";

export function BrandStory() {
  return (
    <section
      aria-labelledby="story-heading"
      className="bg-bone py-20 md:py-28"
    >
      <StrkImage>
        <div className="container-content">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <ScrollReveal className="relative order-2 md:order-1">
              <div className="relative aspect-[4/5] overflow-hidden bg-ivory">
                <img
                  data-strk-img-id="brand-story-portrait"
                  data-strk-img="[story-quote] [story-body] [story-heading] editorial gold jewelry workshop"
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Velmora atelier — hand-finishing gold jewelry"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Decorative offset frame */}
              <div
                aria-hidden="true"
                className="absolute -bottom-5 -right-5 -z-0 hidden h-32 w-32 border border-gold-soft md:block"
              />
            </ScrollReveal>

            <ScrollReveal className="order-1 md:order-2" delay={120}>
              <p className="eyebrow">Our Story</p>
              <h2
                id="story-heading"
                className="mt-3 font-serif text-4xl leading-tight text-ink md:text-5xl"
              >
                Slow-made.
                <br />
                <span className="italic text-gold-deep">Worn for years.</span>
              </h2>
              <p
                id="story-body"
                className="mt-6 max-w-prose text-base leading-relaxed text-ink-soft"
              >
                Velmora began at a small bench in a small studio — a notebook of sketches, a few spools of brass chain, and a stubborn belief that demi-fine could feel as considered as fine.
              </p>
              <p className="mt-4 max-w-prose text-base leading-relaxed text-ink-soft">
                Every piece is plated in 18K gold over a hypoallergenic base, hand-finished, and inspected before it reaches you. We make in small batches, in warm metal, with quiet details you'll only notice when you're wearing it.
              </p>
              <p
                id="story-quote"
                className="mt-8 max-w-prose font-serif text-2xl italic leading-snug text-ink"
              >
                "Jewelry should feel like the warmest thing you own."
              </p>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:text-gold-deep"
                >
                  Read Our Story
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    strokeWidth={1.5}
                  />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </StrkImage>
    </section>
  );
}

export default BrandStory;
