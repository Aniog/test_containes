import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <main className="pt-32 pb-24">
      {/* Hero */}
      <section className="pb-16 md:pb-24">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Our Story</Eyebrow>
            <h1 className="mt-4 font-serif font-light text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight text-[var(--color-ink)]">
              Made to be <em className="italic text-[var(--color-gold-deep)]">worn</em>,<br />
              not stored.
            </h1>
            <p className="mt-7 text-lg text-[var(--color-stone)] leading-relaxed max-w-xl">
              Velmora was started by two friends who believed fine jewelry had become too formal, too
              expensive, and too far from the everyday. We set out to change that — without changing the
              craftsmanship.
            </p>
          </div>
        </Container>
      </section>

      {/* Image + text */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-cream)] order-1">
              <img
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1100&q=85"
                alt="Inside the Velmora studio"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-2">
              <Eyebrow>How We Make</Eyebrow>
              <h2 className="mt-4 font-serif font-light text-4xl sm:text-5xl leading-[1.1] tracking-tight text-[var(--color-ink)]">
                Small batches. <em className="italic text-[var(--color-gold-deep)]">Real care.</em>
              </h2>
              <div className="mt-6 space-y-5 text-[var(--color-stone)] leading-relaxed">
                <p>
                  Every Velmora piece begins as a sketch at our studio table. From there it moves
                  through a small network of bench jewelers — partners we've known for years, who plate,
                  set, and finish each piece by hand.
                </p>
                <p>
                  We work in small batches on purpose. It means we can adjust, fix, and re-do —
                  and it means you own something that wasn't churned out.
                </p>
              </div>
              <Link
                to="/shop"
                className="mt-9 inline-flex items-center gap-2 font-sans text-[0.72rem] uppercase tracking-eyebrow font-medium text-[var(--color-ink)] link-underline"
              >
                Explore the Collection
                <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section id="values" className="py-20 md:py-28 bg-[var(--color-cream)]">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>What We Believe</Eyebrow>
            <h2 className="mt-4 font-serif font-light text-4xl sm:text-5xl leading-[1.1] tracking-tight text-[var(--color-ink)]">
              Three quiet promises.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {[
              {
                title: "Crafted Honestly",
                body: "Real materials, real plating, no shortcuts. Each piece passes through three sets of hands before it reaches yours.",
              },
              {
                title: "Priced Fairly",
                body: "By selling direct, we cut out the markups that make fine jewelry feel unreachable. The price you see is the price we need.",
              },
              {
                title: "Made to Last",
                body: "Quality you can re-plate, repair, and pass down. We design for the second owner as much as the first.",
              },
            ].map((v) => (
              <div key={v.title} className="border-t border-[var(--color-line)] pt-6">
                <h3 className="font-serif text-2xl text-[var(--color-ink)] mb-3">{v.title}</h3>
                <p className="text-sm text-[var(--color-stone)] leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}