import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import JewelImage from "@/components/ui/JewelImage";
import { SectionTitle } from "@/components/ui/SectionTitle";

const TILES = [
  { slug: "earrings", label: "Earrings", shape: "drop", bg: "velvet" },
  { slug: "necklaces", label: "Necklaces", shape: "pendant", bg: "dusk" },
  { slug: "huggies", label: "Huggies", shape: "huggie", bg: "warm" },
];

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-editorial px-5 md:px-10">
        <div className="mb-10 md:mb-14 flex flex-col items-center text-center">
          <SectionTitle
            eyebrow="Shop the Edit"
            title="Shop by Category"
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
          {TILES.map((t) => (
            <Link
              key={t.slug}
              to={`/shop?cat=${t.slug}`}
              className="group relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-ink"
            >
              <JewelImage
                shape={t.shape}
                bg={t.bg}
                alt={`${t.label} collection`}
                className="absolute inset-0 transition-transform duration-[1200ms] ease-velvet group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/30 transition-colors duration-700" />

              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 md:p-8 text-cream">
                <span className="eyebrow text-[0.62rem] text-champagne">Collection</span>
                <h3 className="font-display text-3xl md:text-4xl mt-2">{t.label}</h3>
                <div className="mt-3 flex items-center gap-2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-velvet">
                  <span className="eyebrow text-[0.62rem] text-cream/90">Shop now</span>
                  <ArrowRight size={12} strokeWidth={1.5} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
