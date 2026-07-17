import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import InlineImage from "@/components/ui/InlineImage";
import Newsletter from "@/components/layout/Newsletter";

export default function About() {
  return (
    <>
      <section
        className="relative bg-ink-deep text-ivory pt-32 md:pt-40 pb-20"
      >
        <div className="mx-auto max-w-editorial px-5 md:px-10">
          <p className="eyebrow eyebrow-on-dark">Our Story</p>
          <h1 className="mt-3 font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl">
            A small house, <em className="text-gold-soft">quietly</em> making jewelry.
          </h1>
          <p className="mt-6 text-base md:text-lg text-ivory/75 max-w-xl leading-relaxed">
            Velmora was founded at a single bench with a simple belief — the
            most beautiful thing a piece of jewelry can be is worn, often,
            with nothing to prove.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto grid max-w-editorial grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center px-5 md:px-10">
          <div className="md:col-span-6 order-2 md:order-1">
            <p className="eyebrow">The Beginning</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl leading-tight">
              Started in a print studio.
            </h2>
            <p className="mt-5 text-base leading-[1.8] text-ink-soft">
              Our founder sketched the first ear cuff in soft pencil on a
              break from her day job. Friends asked to wear it. Friends asked
              to buy it. We made more. We worked out the plating. We learned
              to set stones by hand.
            </p>
            <p className="mt-4 text-base leading-[1.8] text-ink-soft">
              Today the studio is still small — six people, one bench, the
              same lamp — but the work is the same: pieces designed to be
              lived in.
            </p>
          </div>
          <div className="md:col-span-6 order-1 md:order-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream-warm">
              <InlineImage
                imgId="about-img-1"
                query="[about-h2]"
                ratio="4x5"
                width={900}
                alt="A founder at her bench, working in soft daylight"
                className="absolute inset-0 h-full w-full"
              />
              <span id="about-h2" className="sr-only">A founder at her bench</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-soft py-20 md:py-24">
        <div className="mx-auto max-w-editorial px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { t: "Demi-fine, by design.", b: "18K gold plate over a hypoallergenic base. Built to last, priced to give." },
            { t: "Made in small batches.", b: "We produce in runs of 50–200, then we stop. No excess. No landfill." },
            { t: "Honest about materials.", b: "We tell you exactly what each piece is made of — and what it isn't." },
          ].map((b) => (
            <div key={b.t} className="border-t border-line pt-6">
              <h3 className="font-display text-2xl leading-tight">{b.t}</h3>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">{b.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream py-20 md:py-24 text-center">
        <div className="mx-auto max-w-2xl px-5 md:px-10">
          <p className="eyebrow">Ready to begin?</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
            Find a piece to start with.
          </h2>
          <Link to="/shop" className="mt-8 btn-primary btn-gold">
            Shop the Collection
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
