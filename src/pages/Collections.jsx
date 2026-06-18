import React from "react";
import { Link } from "react-router-dom";
import StrkImageHost from "@/components/ui/StrkImageHost";

const COLLECTIONS = [
  {
    id: "everyday-gold",
    title: "Everyday Gold",
    subtitle: "The pieces you'll never want to take off",
    description:
      "Quiet, weightless gold meant to live on your skin morning to night. Our most-worn silhouettes.",
  },
  {
    id: "heirloom-edit",
    title: "The Heirloom Edit",
    subtitle: "Made to be passed on",
    description:
      "Sculpted, considered pieces in a heavier finish — collected, gift-boxed, and built for keeping.",
  },
  {
    id: "lacework",
    title: "Lacework",
    subtitle: "Antique-inspired filigree",
    description:
      "Hand-pierced gold lace that flutters with movement. Romantic, editorial, and unmistakably Velmora.",
  },
];

export default function Collections() {
  return (
    <StrkImageHost>
      <section className="bg-bone border-b border-sand py-12 md:py-16">
        <div className="max-w-page mx-auto px-5 md:px-10 lg:px-16 text-center">
          <p className="text-[11px] uppercase tracking-wider2 text-gold mb-3">Collections</p>
          <h1 className="font-serif text-4xl md:text-6xl text-ink">Edits, by mood.</h1>
          <p className="mt-4 text-sm md:text-base text-espresso/80 max-w-xl mx-auto">
            Three quiet directions. Choose the one that matches the way you wear gold.
          </p>
        </div>
      </section>

      <section className="max-w-page mx-auto px-5 md:px-10 lg:px-16 py-16 md:py-24 space-y-20 md:space-y-28">
        {COLLECTIONS.map((c, i) => (
          <article
            key={c.id}
            className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative aspect-[4/5] bg-ivory overflow-hidden">
              <img
          data-strk-img-id={`collection-${c.id}-image`}
          data-strk-img={`[collection-${c.id}-desc] [collection-${c.id}-title] gold jewelry editorial`}
          data-strk-img-ratio="4x3"
          data-strk-img-width={1000}
          alt={c.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider2 text-gold mb-3">
                Collection {String(i + 1).padStart(2, "0")}
              </p>
              <h2
                id={`collection-${c.id}-title`}
                className="font-serif text-4xl md:text-5xl leading-tight text-ink"
              >
                {c.title}
              </h2>
              <p
                id={`collection-${c.id}-desc`}
                className="mt-2 text-sm uppercase tracking-editorial text-muted"
              >
                {c.subtitle}
              </p>
              <p className="mt-6 text-base text-espresso leading-relaxed max-w-md">
                {c.description}
              </p>
              <Link
                to="/shop"
                className="inline-block mt-8 text-[11px] uppercase tracking-editorial border-b border-ink pb-1 hover:text-gold hover:border-gold transition"
              >
                Shop Collection
              </Link>
            </div>
          </article>
        ))}
      </section>
    </StrkImageHost>
  );
}
