import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ProductImage from "@/components/product/ProductImage";

const collections = [
  {
    id: "bestsellers",
    name: "The Bestsellers",
    description: "The pieces our community reaches for most.",
    imgId: "collection-bestsellers-img",
    titleId: "collection-bestsellers-title",
    descId: "collection-bestsellers-desc",
  },
  {
    id: "gifting",
    name: "The Gift Edit",
    description: "Wrapped in velvet — for the moments that matter.",
    imgId: "collection-gifting-img",
    titleId: "collection-gifting-title",
    descId: "collection-gifting-desc",
  },
  {
    id: "everyday",
    name: "The Everyday Edit",
    description: "Quiet pieces, designed to be lived in.",
    imgId: "collection-everyday-img",
    titleId: "collection-everyday-title",
    descId: "collection-everyday-desc",
  },
];

export default function Collections() {
  return (
    <>
      <section className="bg-ivory border-b border-hairline">
        <div className="container-wide py-20 md:py-28 text-center">
          <p className="eyebrow mb-3">Collections</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl">
            Curated edits
          </h1>
          <p className="mt-4 text-sm md:text-base text-taupe max-w-md mx-auto">
            A small library of stories, told in gold.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-ivory">
        <div className="container-wide space-y-6">
          {collections.map((c, i) => (
            <Link
              key={c.id}
              to="/shop"
              className="group block relative overflow-hidden bg-sand aspect-[16/9] md:aspect-[21/9]"
            >
              <ProductImage
                imgId={c.imgId}
                query={`[${c.descId}] [${c.titleId}] Curated edits`}
                ratio="21x9"
                width={1400}
                alt={c.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-warmBlack/65 via-warmBlack/30 to-warmBlack/0" />
              <div className="absolute inset-0 p-8 md:p-14 flex flex-col justify-end text-ivory">
                <p className="font-sans text-[10px] uppercase tracking-widest2 text-ivory/80 mb-2">
                  Collection {String(i + 1).padStart(2, "0")}
                </p>
                <h2
                  id={c.titleId}
                  className="font-serif text-4xl md:text-5xl lg:text-6xl"
                >
                  {c.name}
                </h2>
                <p
                  id={c.descId}
                  className="mt-2 text-sm md:text-base text-ivory/80 max-w-md font-light"
                >
                  {c.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest2 text-ivory">
                  Explore the edit{" "}
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
