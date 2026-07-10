import React from "react";
import { Link } from "react-router-dom";
import StrkImage from "@/components/ui/StrkImage";
import Button from "@/components/ui/Button";
import Newsletter from "@/components/home/Newsletter";

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink-950 text-textondark">
        <div className="mx-auto max-w-content px-6 md:px-10 lg:px-16 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="label-cap text-champagne-300">Our Story</span>
              <h1
                id="about-title"
                className="mt-4 font-serif text-5xl md:text-7xl font-light leading-[1.02]"
              >
                Made slowly.
                <br /> Made to be kept.
              </h1>
              <p
                id="about-subtitle"
                className="mt-6 text-lg text-textmuteondark max-w-xl leading-relaxed"
              >
                Velmora is a small studio of jewelers and editors. We make
                demi-fine jewelry, finished in 18K gold, designed for the
                everyday — and the years after.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] bg-ink-800 overflow-hidden">
                <StrkImage
                  imgId="about-portrait-1a2b3c"
                  query="editorial portrait of a quiet jeweler's workbench with small gold tools and a half-finished piece on linen warm natural light"
                  ratio="4x5"
                  width={900}
                  alt="The Velmora studio"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand-50">
        <div className="mx-auto max-w-content px-6 md:px-10 lg:px-16 py-20 md:py-28">
          <div className="max-w-2xl mx-auto space-y-8 text-textmute leading-relaxed">
            <p className="font-serif text-2xl md:text-3xl font-light text-ink-950">
              We started Velmora because the jewelry we loved most had stopped
              being made.
            </p>
            <p>
              The pieces passed down to us — a grandmother's chain, a thin
              gold cuff on a wedding day — had something the new ones didn't:
              they felt quiet on the body, and they lasted.
            </p>
            <p>
              We work with a small family studio in Bangkok, plating each
              piece by hand in 18K gold over a nickel-free brass core. We
              design in small batches and ship in linen-wrapped boxes meant
              to be kept long after the ribbon comes off.
            </p>
            <p>
              Nothing we make is meant to be loud. It is meant to be the
              thing you reach for without thinking — and the thing someone
              else notices, eventually, with a question.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand-100">
        <div className="mx-auto max-w-content px-6 md:px-10 lg:px-16 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { num: "01", t: "Hand-Finished", d: "Each piece is plated in 18K gold by hand, in small batches, by people we know by name." },
              { num: "02", t: "Hypoallergenic", d: "Nickel-free, lead-free, and gentle on sensitive skin — because jewelry shouldn't cost you comfort." },
              { num: "03", t: "Made to Keep", d: "Linen-wrapped gift boxes, a 30-day return window, and a 1-year tarnish promise on every piece." },
            ].map((it) => (
              <div key={it.num}>
                <span className="label-cap text-champagne-600">{it.num}</span>
                <h3 className="mt-3 font-serif text-2xl font-light text-ink-950">{it.t}</h3>
                <p className="mt-3 text-sm text-textmute leading-relaxed">{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-50">
        <div className="mx-auto max-w-content px-6 md:px-10 lg:px-16 py-20 md:py-24 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ink-950 max-w-2xl mx-auto">
            Quietly, begin.
          </h2>
          <p className="mt-4 text-textmute max-w-md mx-auto">
            One piece. Worn often. Kept for years.
          </p>
          <Button variant="primary" size="lg" as={Link} to="/shop" className="mt-8">
            Shop the Collection
          </Button>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
