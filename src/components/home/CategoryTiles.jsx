import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/data/products";
import { useStrkImage } from "@/hooks/useStrkImage";
import StockImage from "@/components/ui/StockImage";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import { useReveal } from "@/hooks/useReveal";

const TILE_QUERIES = {
  earrings:
    "gold earrings flat lay on dark warm background, editorial product photography",
  necklaces:
    "delicate gold necklace on warm dark background, editorial product photography",
  huggies: "gold huggie hoop earrings on warm beige background, close up",
};

export default function CategoryTiles() {
  const ref = useRef(null);
  useReveal(ref);
  useStrkImage(ref, []);

  return (
    <section ref={ref} className="bg-cream py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-screen-2xl px-5 md:px-8 lg:px-12">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <Eyebrow>Shop By Category</Eyebrow>
            <SectionTitle className="mt-3">The full edit</SectionTitle>
          </div>
          <p className="max-w-sm text-sm text-taupe leading-relaxed">
            Every category, considered. From everyday huggies to the necklace
            you never take off.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
          {CATEGORIES.filter((c) => c.id !== "sets").map((cat, i) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="reveal group block relative overflow-hidden aspect-[4/5] md:aspect-[3/4] bg-cream-deep"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <StockImage
                id={`cat-tile-${cat.id}`}
                query={TILE_QUERIES[cat.id]}
                alt={cat.label}
                ratio="3x4"
                width={900}
                className="w-full h-full"
                loading="lazy"
              />
              {/* Subtle darken on hover */}
              <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/20 transition-colors duration-700 ease-elegant" />
              {/* Label */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between text-cream">
                <div>
                  <h3 className="font-serif font-light text-3xl md:text-4xl leading-none">
                    {cat.label}
                  </h3>
                  <p className="mt-2 text-[11px] uppercase tracking-eyebrow text-cream/85">
                    Shop the {cat.label.toLowerCase()}
                  </p>
                </div>
                <span className="h-10 w-10 flex items-center justify-center border border-cream/40 transition-all duration-500 ease-elegant group-hover:bg-cream group-hover:text-espresso">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.4} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
