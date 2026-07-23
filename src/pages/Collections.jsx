import React from "react";
import { Link } from "react-router-dom";

const collections = [
  {
    id: "the-everyday-edit",
    name: "The Everyday Edit",
    blurb: "The pieces you'll reach for without thinking.",
    pieceCount: 6,
    imgId: "coll-everyday-b1c2d3",
  },
  {
    id: "gifts-under-100",
    name: "Gifts Under $100",
    blurb: "Quietly considered, beautifully packaged.",
    pieceCount: 8,
    imgId: "coll-gifts-c2d3e4",
  },
  {
    id: "layered-essentials",
    name: "Layered Essentials",
    blurb: "The art of wearing more than one thing.",
    pieceCount: 5,
    imgId: "coll-layered-d3e4f5",
  },
  {
    id: "the-wedding-guest",
    name: "The Wedding Guest",
    blurb: "For the ceremonies, the toasts, the after-party.",
    pieceCount: 7,
    imgId: "coll-wedding-e4f5a6",
  },
];

export default function Collections() {
  return (
    <div className="pt-20 md:pt-24">
      <section className="bg-cream-100 border-b border-cream-200">
        <div className="container-editorial py-12 md:py-20">
          <p className="eyebrow mb-3">Curated edits</p>
          <h1 className="font-serif font-light text-ink-900 text-[44px] md:text-[72px] leading-[1.02]">
            Collections
          </h1>
          <p className="mt-4 text-ink-700 text-base md:text-lg max-w-xl font-light">
            A small, considered set of edits — built around the moments and
            moods we live in.
          </p>
        </div>
      </section>

      <section className="container-editorial py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {collections.map((c) => (
            <Link
              key={c.id}
              to={`/shop?cat=${c.id === "the-everyday-edit" ? "earrings" : c.id === "gifts-under-100" ? "necklaces" : c.id === "the-wedding-guest" ? "necklaces" : "huggies"}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-cocoa-800">
                <img
                  alt={c.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-[1.04]"
                  data-strk-img-id={c.imgId}
                  data-strk-img={`${c.name} ${c.blurb} editorial jewelry collection`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa-900/80 via-cocoa-900/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="eyebrow-light text-gold-300 mb-2">
                    {c.pieceCount} pieces
                  </p>
                  <h2 className="font-serif text-cream-50 text-[28px] md:text-[40px] leading-[1.05]">
                    {c.name}
                  </h2>
                  <p className="mt-2 text-cream-100/85 text-sm md:text-base max-w-md">
                    {c.blurb}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
