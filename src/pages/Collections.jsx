import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const EDITS = [
  {
    id: "the-everyday",
    title: "The Everyday",
    subtitle: "Pieces you'll never take off.",
    href: "/shop?category=huggies",
    titleId: "edit-everyday-title",
    descId: "edit-everyday-desc",
    imgId: "edit-everyday-img-7a8b",
  },
  {
    id: "the-gift",
    title: "The Gift",
    subtitle: "Ribbon-tied, hand-finished.",
    href: "/product/royal-heirloom-set",
    titleId: "edit-gift-title",
    descId: "edit-gift-desc",
    imgId: "edit-gift-img-8b9c",
  },
  {
    id: "the-statement",
    title: "The Statement",
    subtitle: "Quietly louder than the room.",
    href: "/shop?category=earrings",
    titleId: "edit-statement-title",
    descId: "edit-statement-desc",
    imgId: "edit-statement-img-9c0d",
  },
  {
    id: "the-layer",
    title: "The Layer",
    subtitle: "Built to be stacked.",
    href: "/shop?category=necklaces",
    titleId: "edit-layer-title",
    descId: "edit-layer-desc",
    imgId: "edit-layer-img-0d1e",
  },
];

export default function Collections() {
  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-ivory">
      <div className="border-b border-hairline">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16 md:py-20 text-center">
          <p className="font-sans text-[11px] uppercase tracking-[0.32em] text-gold mb-3">The Edits</p>
          <h1 className="font-serif font-light text-5xl md:text-6xl tracking-tight text-onyx">
            Collections
          </h1>
          <p className="mt-4 font-sans text-taupe max-w-xl mx-auto">
            Considered groupings, curated by our stylists. A starting point for
            your next favorite piece.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {EDITS.map((edit) => (
            <Link
              key={edit.id}
              to={edit.href}
              className="group relative block aspect-[4/5] overflow-hidden bg-bone"
            >
              <img
                alt={edit.title}
                data-strk-img-id={edit.imgId}
                data-strk-img={`[${edit.descId}] [${edit.titleId}] gold jewelry editorial warm tone luxury close up`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/75 via-onyx/15 to-transparent" />
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-ivory">
                <p className="font-sans text-[11px] uppercase tracking-[0.32em] text-champagne mb-3">
                  The Edit
                </p>
                <h2
                  id={edit.titleId}
                  className="font-serif font-light text-4xl md:text-5xl tracking-tight"
                >
                  {edit.title}
                </h2>
                <p
                  id={edit.descId}
                  className="mt-3 font-sans text-ivory/85 max-w-xs"
                >
                  {edit.subtitle}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.28em] text-champagne">
                  Explore
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
