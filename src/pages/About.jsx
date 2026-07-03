import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StockImage from "@/components/ui/StockImage";
import StockBackground from "@/components/ui/StockBackground";

export default function About() {
  return (
    <>
      <section className="relative">
        <StockBackground
          id="about-hero"
          query="artisan goldsmith working at bench soft warm light"
          ratio="16x9"
          width={1600}
          className="h-[55vh] min-h-[400px]"
          overlayClassName="bg-gradient-to-b from-ink/40 via-ink/15 to-ink/65"
        >
          <div className="container-page h-full flex flex-col justify-end pb-12 text-ivory">
            <p className="eyebrow text-ivory/80 mb-3">Est. 2019</p>
            <h1 className="font-serif text-5xl md:text-7xl font-light leading-[1.02] max-w-3xl text-balance">
              The studio behind every piece.
            </h1>
          </div>
        </StockBackground>
      </section>

      <section className="bg-ivory">
        <div className="container-page py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="eyebrow text-taupe">Our Story</p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl font-light leading-[1.05] text-ink">
                Slow, on purpose.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-ink/80 leading-relaxed max-w-reading">
              <p>
                Velmora began at a small bench in Florence, with a single
                question: why does the most-worn jewelry in a woman's box rarely
                come from a name she trusts?
              </p>
              <p>
                We work with family-run ateliers in Italy and Thailand to make
                demi-fine pieces the way the old houses do — thick 18K gold plate
                over a solid brass core, hand-set crystals, hand-finished edges.
                Sold directly, so the price reflects the craft, not the markup.
              </p>
              <p>
                We do not chase trends. We do not restock twice in exactly the
                same way. Every piece is signed, numbered, and shipped in
                recyclable packaging from our studio in Brooklyn.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory-soft border-y border-hairline">
        <div className="container-page py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                n: "01",
                t: "Made by hand",
                d: "Cast, set, and finished by a small team of five artisans across Italy and Thailand.",
              },
              {
                n: "02",
                t: "Made to last",
                d: "2.5 micron 18K gold plate — roughly five times the industry standard. Hypoallergenic, always.",
              },
              {
                n: "03",
                t: "Made honestly",
                d: "Recyclable packaging, no greenwashing, fair pay audits at every workshop we work with.",
              },
            ].map((b) => (
              <div key={b.n} className="border-l border-hairline pl-6">
                <p className="font-serif text-3xl text-gold">{b.n}</p>
                <h3 className="mt-3 font-serif text-2xl text-ink">{b.t}</h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed max-w-xs">
                  {b.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-page py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow text-taupe mb-3">The Craft</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.05] text-ink">
              In the workshop
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              "casting molten gold into molds",
              "polishing gold jewelry by hand on linen",
              "hand setting crystal into gold bezel",
              "finishing gold ring detail closeup",
            ].map((q, i) => (
              <StockImage
                key={i}
                id={`about-craft-${i}`}
                query={q}
                ratio="1x1"
                width={600}
                alt={q}
                className="w-full"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-ivory">
        <div className="container-page py-20 md:py-24 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.05] max-w-2xl mx-auto text-balance">
            Find a piece that becomes yours.
          </h2>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-2 text-xs tracking-eyebrow uppercase text-ivory hover:text-gold-soft transition-colors group"
          >
            Shop the Collection
            <ArrowRight
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </section>
    </>
  );
}
