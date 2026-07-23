import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import StrkBg from "@/components/ui/StrkBg";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const TILES = [
  {
    id: "cat-earrings",
    label: "Earrings",
    desc: "Sculptural drops & cuffs",
    query: "elegant gold earrings on dark neutral background, luxury jewelry photography, editorial",
  },
  {
    id: "cat-necklaces",
    label: "Necklaces",
    desc: "Delicate chains & pendants",
    query: "delicate gold necklace on dark elegant background, luxury jewelry photography, editorial",
  },
  {
    id: "cat-huggies",
    label: "Huggies",
    desc: "The everyday essential",
    query: "gold huggie hoop earrings on dark neutral background, macro luxury jewelry photography",
  },
];

export default function CategoryTiles() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-12">
      <SectionHeading
        eyebrow="Curated For You"
        title="Shop by Category"
        sub="Three signatures, endless ways to wear them."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TILES.map((tile, i) => (
          <Reveal key={tile.id} delay={i * 80} className={i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}>
            <Link to={`/shop?category=${tile.label}`} className="group block">
              <StrkBg
                bgId={`${tile.id}-bg`}
                query={tile.query}
                ratio="4x3"
                width={900}
                className="relative aspect-[4/5] overflow-hidden sm:aspect-[4/4] lg:aspect-[4/5]"
              >
                <div className="absolute inset-0 bg-espresso/20 transition-colors duration-500 group-hover:bg-espresso/45" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <span className="translate-y-3 font-display text-3xl uppercase tracking-widest2 text-ivory opacity-90 transition-all duration-500 ease-luxe group-hover:translate-y-0 group-hover:opacity-100 md:text-4xl">
                    {tile.label}
                  </span>
                  <span className="mt-2 flex translate-y-3 items-center gap-1.5 font-body text-[11px] uppercase tracking-widest2 text-ivory/0 transition-all duration-500 ease-luxe group-hover:translate-y-0 group-hover:text-ivory/90">
                    {tile.desc}
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </StrkBg>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
