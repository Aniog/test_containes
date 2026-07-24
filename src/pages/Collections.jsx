import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StockImage from "@/components/ui/StockImage";
import Reveal from "@/components/ui/Reveal";

const COLLECTIONS = [
  {
    id: "heritage",
    name: "The Heritage Edit",
    description:
      "Pieces shaped by heirloom silhouettes — reissued for the everyday.",
    img: "Editorial still life of a stack of gold jewelry on warm linen background",
    imgId: "coll-heritage-2c4d8a",
    productCount: 8,
  },
  {
    id: "flora",
    name: "Flora",
    description:
      "Petals, pollen, and warmth — jewelry in conversation with the garden.",
    img: "Editorial still life of floral crystal gold necklace on linen warm light",
    imgId: "coll-flora-9e1b3a",
    productCount: 6,
  },
  {
    id: "minimal",
    name: "Daily Gold",
    description:
      "Tiny, tactile, hand-finished pieces you'll forget you're wearing.",
    img: "Editorial still life of small gold huggie earrings and chain on linen",
    imgId: "coll-minimal-7d4e2b",
    productCount: 12,
  },
];

export default function Collections() {
  return (
    <main className="pt-28 sm:pt-36 pb-24 bg-cream-100 min-h-screen">
      <div className="container-wide">
        <Reveal>
          <header className="mb-12 sm:mb-16">
            <p className="eyebrow mb-3">Collections</p>
            <h1 className="font-display text-[48px] sm:text-[80px] leading-[1] text-onyx-800">
              Three edits,{" "}
              <span className="italic">endlessly wearable.</span>
            </h1>
            <p className="font-display italic text-[20px] sm:text-[24px] text-mocha-500 mt-3 max-w-[60ch]">
              Curated chapters from the studio — small batches, no drops.
            </p>
          </header>
        </Reveal>

        <div className="space-y-16 sm:space-y-24">
          {COLLECTIONS.map((c, i) => (
            <Reveal key={c.id} delay={i * 80}>
              <Link
                to="/shop"
                className={`group block grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:[&>:first-child]:order-2" : ""
                }`}
              >
                <div className="overflow-hidden">
                  <StockImage
                    query={c.img}
                    ratio="4x3"
                    width={1200}
                    imgId={c.imgId}
                    className="w-full transition-transform duration-1200 group-hover:scale-[1.04]"
                    alt={c.name}
                  />
                </div>
                <div className="max-w-[40ch]">
                  <p className="eyebrow mb-3">{c.productCount} pieces</p>
                  <h2 className="font-display text-[40px] sm:text-[56px] leading-[1.02] text-onyx-800">
                    {c.name}
                  </h2>
                  <p className="mt-4 text-[16px] text-mocha-600 leading-[1.75]">
                    {c.description}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 font-sans uppercase tracking-widest-2 text-[12px] text-onyx-800 border-b border-onyx-800 pb-1 group-hover:text-gold-500 group-hover:border-gold-500 transition-colors">
                    Shop the edit <ArrowRight size={14} strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
