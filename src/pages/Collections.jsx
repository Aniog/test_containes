import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import StrkBg from "@/components/ui/StrkBg";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { PRODUCTS } from "@/data/products";

const COLLECTIONS = [
  {
    id: "col-earrings",
    title: "Earrings",
    count: PRODUCTS.filter((p) => p.category === "Earrings").length,
    desc: "Sculptural drops, cuffs and statements that frame the face.",
    query: "collection of elegant gold earrings on dark background, luxury jewelry editorial photography",
  },
  {
    id: "col-necklaces",
    title: "Necklaces",
    count: PRODUCTS.filter((p) => p.category === "Necklaces").length,
    desc: "Delicate chains and luminous pendants, made to layer.",
    query: "collection of delicate gold necklaces on dark background, luxury jewelry editorial photography",
  },
  {
    id: "col-huggies",
    title: "Huggies",
    count: PRODUCTS.filter((p) => p.category === "Huggies").length,
    desc: "The everyday hoop, perfected in warm 18K gold.",
    query: "collection of gold huggie hoop earrings on dark background, luxury jewelry editorial photography",
  },
  {
    id: "col-sets",
    title: "Gift Sets",
    count: PRODUCTS.filter((p) => p.category === "Sets").length,
    desc: "Gift-boxed pairings, ready to give and impossible to forget.",
    query: "luxury gold jewelry gift sets in velvet boxes on dark background, editorial photography",
  },
];

export default function Collections() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-8 md:pt-32 lg:px-12">
      <SectionHeading
        align="left"
        eyebrow="Explore"
        title="The Collections"
        sub="Four signatures of the Velmora house — each crafted in 18K gold, each made to be treasured."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {COLLECTIONS.map((col, i) => (
          <Reveal key={col.id} delay={i * 70}>
            <Link to={`/shop?category=${col.title === "Gift Sets" ? "Sets" : col.title}`} className="group block">
              <StrkBg
                bgId={`${col.id}-bg`}
                query={col.query}
                ratio="16x9"
                width={1100}
                className="relative aspect-[16/10] overflow-hidden"
              >
                <div className="absolute inset-0 bg-espresso/30 transition-colors duration-500 group-hover:bg-espresso/55" />
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <div className="translate-y-2 transition-transform duration-500 ease-luxe group-hover:translate-y-0">
                    <span className="font-body text-[10px] uppercase tracking-mega text-gold">
                      {col.count} {col.count === 1 ? "piece" : "pieces"}
                    </span>
                    <div className="mt-1 flex items-center justify-between gap-4">
                      <h2 className="font-display text-3xl uppercase tracking-widest2 text-ivory md:text-4xl">
                        {col.title}
                      </h2>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ivory/40 text-ivory transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-espresso">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                    <p className="mt-2 max-w-sm font-body text-sm text-ivory/0 transition-all duration-500 group-hover:text-ivory/85">
                      {col.desc}
                    </p>
                  </div>
                </div>
              </StrkBg>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
