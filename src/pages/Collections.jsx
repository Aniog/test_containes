import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Reveal from "@/components/Reveal";

const COLLECTIONS = [
  {
    id: "the-everyday-edit",
    name: "The Everyday Edit",
    note: "Huggies, cuffs and chains made for daily wear",
    to: "/shop?category=Huggies",
    query: "minimal gold huggie earrings and fine chain necklaces styled on warm neutral linen, editorial flat lay",
  },
  {
    id: "the-evening-edit",
    name: "The Evening Edit",
    note: "Drops and filigree that catch candlelight",
    to: "/shop?category=Earrings",
    query: "elegant gold drop earrings with crystals on dark silk fabric, moody warm editorial photography",
  },
  {
    id: "the-gift-edit",
    name: "The Gift Edit",
    note: "Boxed sets, ready to give beautifully",
    to: "/shop?category=Sets",
    query: "luxury jewelry gift box with gold necklace and earrings, ribbon, warm elegant still life",
  },
];

export default function Collections() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
      <header className="border-b border-hairline py-12 text-center md:py-16">
        <p className="text-xs tracking-[0.4em] uppercase text-gold">
          Curated for You
        </p>
        <h1 className="mt-4 font-serif text-4xl font-medium uppercase tracking-[0.06em] text-espresso md:text-5xl">
          Collections
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-taupe">
          Three small edits, assembled by our stylists — for mornings,
          evenings, and moments worth wrapping.
        </p>
      </header>

      <div className="grid gap-6 pt-12 md:grid-cols-3">
        {COLLECTIONS.map((col, i) => (
          <Reveal key={col.id} delay={i * 100}>
            <Link
              to={col.to}
              className="group relative block overflow-hidden bg-sand aspect-[3/4]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                data-strk-bg-id={`collection-${col.id}`}
                data-strk-bg={col.query}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-espresso/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h2 className="font-serif text-2xl uppercase tracking-[0.12em] text-ivory">
                  {col.name}
                </h2>
                <p className="mt-2 text-sm text-sand/90">{col.note}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.28em] uppercase text-gold-light">
                  Explore
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
