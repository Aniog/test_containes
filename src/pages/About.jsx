import React from "react";
import StrkImageHost from "@/components/ui/StrkImageHost";

export default function About() {
  return (
    <StrkImageHost>
      {/* Editorial intro */}
      <section className="bg-ivory py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-10 text-center">
          <p className="text-[11px] uppercase tracking-wider2 text-gold mb-4">About Velmora</p>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight text-ink">
            Quiet objects, made to be lived&nbsp;in.
          </h1>
          <p className="mt-6 text-base md:text-lg text-espresso/80 leading-relaxed">
            Velmora is a small studio making demi-fine gold jewelry — the kind that gets
            better with wear, looks at home with anything, and quietly outlasts the trend.
          </p>
        </div>
      </section>

      <section className="max-w-page mx-auto px-5 md:px-10 lg:px-16 pb-12 md:pb-20">
        <div className="aspect-[16/9] bg-bone overflow-hidden">
          <img
          data-strk-img-id="about-hero-image"
          data-strk-img="[about-hero-caption] artisan studio crafting gold jewelry warm natural light"
          data-strk-img-ratio="16x9"
          data-strk-img-width={2000}
          alt="Inside the Velmora studio"
          className="w-full h-full object-cover"
          loading="lazy"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        </div>
        <p
          id="about-hero-caption"
          className="mt-3 text-xs text-muted text-center md:text-right"
        >
          Inside our atelier — every piece is finished by hand.
        </p>
      </section>

      <section className="bg-bone py-20 md:py-24 border-t border-sand">
        <div className="max-w-page mx-auto px-5 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          {[
            {
              title: "Made by hand",
              body: "Every Velmora piece is finished by an artisan at our studio. No mass-produced shortcuts — only patient, considered work.",
            },
            {
              title: "Built to last",
              body: "We use 18K gold plate over hypoallergenic brass, and finish each piece with a sealing layer that's gentle on skin and built to wear.",
            },
            {
              title: "Small batches",
              body: "We design slowly and produce in small runs. Fewer pieces, made better — and made to feel like yours from the first wear.",
            },
          ].map((b) => (
            <div key={b.title}>
              <h3 className="font-serif text-2xl md:text-3xl text-ink">{b.title}</h3>
              <p className="mt-4 text-sm text-espresso/80 leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-page mx-auto px-5 md:px-10 lg:px-16 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <p className="text-[11px] uppercase tracking-wider2 text-gold mb-3">The Promise</p>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight text-ink">
            We make jewelry the way it used to be made — and how it should still be.
          </h2>
          <p className="mt-6 text-base text-espresso leading-relaxed">
            Every piece comes with a lifetime craft guarantee. If anything ever fails for
            reasons of craftsmanship, we will repair or replace it — quietly, without fuss.
          </p>
        </div>
        <div className="aspect-[4/5] bg-bone overflow-hidden">
          <img
          data-strk-img-id="about-promise-image"
          data-strk-img="close up of hand holding gold ring detail warm soft lighting"
          data-strk-img-ratio="4x3"
          data-strk-img-width={1200}
          alt="Hand-finished detail on a Velmora piece"
          className="w-full h-full object-cover"
          loading="lazy"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        </div>
      </section>
    </StrkImageHost>
  );
}
