import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PLACEHOLDER_SRC } from "@/components/ui/StrkImg";
import Reveal from "@/components/ui/Reveal";

const COLLECTIONS = [
  {
    id: "earrings",
    title: "The Earring Edit",
    desc: "Filigree drops, crystal cuffs, and sculptural studs — framed for candlelight.",
    span: "md:col-span-2",
    ratio: "16x9",
  },
  {
    id: "necklaces",
    title: "Fine Chains & Pendants",
    desc: "Delicate strands designed for layering and living in.",
    span: "",
    ratio: "3x4",
  },
  {
    id: "huggies",
    title: "The Huggie Bar",
    desc: "Chunky domes and polished hoops that never come off.",
    span: "",
    ratio: "3x4",
  },
  {
    id: "sets",
    title: "The Gift Atelier",
    desc: "Velvet-boxed sets with keepsake cards, ready to give — or keep.",
    span: "md:col-span-2",
    ratio: "16x9",
  },
];

export default function CollectionsPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-ivory pt-16 md:pt-20">
      <header className="border-b border-line bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center md:px-8 md:py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gold-deep">
            Velmora
          </p>
          <h1
            id="collections-title"
            className="mt-3 font-serif text-4xl font-medium text-ink md:text-6xl"
          >
            The Collections
          </h1>
          <p
            id="collections-sub"
            className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-bronze"
          >
            Four edits of demi-fine gold jewelry, each with its own mood —
            made to be mixed, layered, and treasured.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {COLLECTIONS.map((c, i) => (
            <Reveal key={c.id} delay={i * 80} className={c.span}>
              <Link
                to={`/shop?category=${c.id}`}
                className="group relative block overflow-hidden bg-espresso"
              >
                <div className={c.ratio === "16x9" ? "aspect-[16/10]" : "aspect-[3/4] md:aspect-[16/10]"}>
                  <img
                    data-strk-img-id={`collections-${c.id}`}
                    data-strk-img={`[collections-${c.id}-title] [collections-${c.id}-desc] [collections-sub]`}
                    data-strk-img-ratio={c.ratio}
                    data-strk-img-width={c.ratio === "16x9" ? "1400" : "800"}
                    src={PLACEHOLDER_SRC}
                    alt={c.title}
                    className="h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7">
                  <div>
                    <h2
                      id={`collections-${c.id}-title`}
                      className="font-serif text-2xl font-medium text-ivory md:text-3xl"
                    >
                      {c.title}
                    </h2>
                    <p
                      id={`collections-${c.id}-desc`}
                      className="mt-2 max-w-sm text-xs leading-relaxed text-ivory/70"
                    >
                      {c.desc}
                    </p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold-soft text-gold-soft transition-all duration-300 group-hover:bg-gold-soft group-hover:text-ink">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
