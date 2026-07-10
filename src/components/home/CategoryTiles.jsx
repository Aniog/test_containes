import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StrkImage from "@/components/ui/StrkImage";

const TILES = [
  {
    id: "earrings",
    label: "Earrings",
    to: "/shop?category=earrings",
    imgId: "cat-earrings-1a2b3c",
    query: "editorial flat lay of demi-fine gold earrings on warm cream linen background soft natural light",
    titleId: "cat-earrings-title",
    descId: "cat-earrings-desc",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    to: "/shop?category=necklaces",
    imgId: "cat-necklaces-4d5e6f",
    query: "editorial flat lay of 18K gold plated pendant necklaces on warm linen neutral soft daylight",
    titleId: "cat-necklaces-title",
    descId: "cat-necklaces-desc",
  },
  {
    id: "huggies",
    label: "Huggies",
    to: "/shop?category=huggies",
    imgId: "cat-huggies-7g8h9i",
    query: "editorial flat lay of chunky gold huggie earrings on dark moody warm background closeup",
    titleId: "cat-huggies-title",
    descId: "cat-huggies-desc",
  },
];

export default function CategoryTiles() {
  return (
    <section className="bg-sand-50">
      <div className="mx-auto max-w-content px-6 md:px-10 lg:px-16 py-20 md:py-28">
        <div className="text-center max-w-xl mx-auto mb-12 md:mb-16">
          <span className="label-cap text-champagne-600">Shop by Category</span>
          <h2
            id="cat-section-title"
            className="mt-4 font-serif text-4xl md:text-5xl font-light text-ink-950"
          >
            Find your daily signature.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {TILES.map((t) => (
            <Link
              key={t.id}
              to={t.to}
              className="group relative block overflow-hidden bg-ink-950 aspect-[3/4]"
            >
              <StrkImage
                imgId={t.imgId}
                query={`${t.query} ${t.label} demi-fine gold jewelry`}
                ratio="3x4"
                width={800}
                alt={t.label}
                className="absolute inset-0 w-full h-full editorial-transition group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-ink-950/0 via-ink-950/10 to-ink-950/70" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-textondark">
                <h3
                  id={t.titleId}
                  className="font-serif text-3xl md:text-4xl font-light"
                >
                  {t.label}
                </h3>
                <p
                  id={t.descId}
                  className="mt-1 label-cap text-champagne-300 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 editorial-transition"
                >
                  Explore
                </p>
                <span className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-10 h-10 inline-flex items-center justify-center border border-textondark/60 text-textondark group-hover:bg-textondark group-hover:text-ink-950 editorial-transition">
                  <ArrowRight size={14} strokeWidth={1.4} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
