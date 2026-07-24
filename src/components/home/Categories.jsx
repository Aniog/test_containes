import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import StockImage from "@/components/ui/StockImage";
import Reveal from "@/components/ui/Reveal";

const TILES = [
  {
    id: "earrings",
    label: "Earrings",
    to: "/shop?category=earrings",
    img: "Editorial still life of gold drop earrings on warm linen background warm light",
    imgId: "cat-earrings-9b2c1f",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    to: "/shop?category=necklaces",
    img: "Editorial still life of floral crystal gold necklace on warm linen background warm light",
    imgId: "cat-necklaces-3a7e8d",
  },
  {
    id: "huggies",
    label: "Huggies",
    to: "/shop?category=huggies",
    img: "Editorial still life of chunky gold dome huggie earrings on warm linen warm light",
    imgId: "cat-huggies-6f4d2a",
  },
];

export default function Categories() {
  return (
    <section className="py-20 sm:py-28 bg-cream-100">
      <div className="container-wide">
        <Reveal>
          <div className="text-center mb-12 sm:mb-16">
            <p className="eyebrow mb-3">Shop by category</p>
            <h2 className="font-display text-[40px] sm:text-[56px] leading-[1.05] text-onyx-800">
              Begin with a category.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {TILES.map((tile, i) => (
            <Reveal key={tile.id} delay={i * 100}>
              <Link
                to={tile.to}
                className="group relative block overflow-hidden bg-onyx-900 aspect-[3/4]"
                aria-label={`Shop ${tile.label}`}
              >
                <StockImage
                  query={tile.img}
                  ratio="3x4"
                  width={900}
                  imgId={tile.imgId}
                  className="w-full h-full transition-transform duration-1200 group-hover:scale-[1.06]"
                  alt={tile.label}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(14,13,10,0.0) 30%, rgba(14,13,10,0.55) 100%)",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 flex items-end justify-between">
                  <div>
                    <h3 className="font-display text-[34px] sm:text-[40px] leading-none text-cream-100">
                      {tile.label}
                    </h3>
                    <p className="mt-2 font-sans uppercase tracking-widest-2 text-[10px] text-cream-200/70">
                      Shop the edit
                    </p>
                  </div>
                  <span className="inline-flex items-center justify-center w-10 h-10 border border-cream-200/40 text-cream-100 rounded-full transition-all duration-500 group-hover:bg-cream-100 group-hover:text-onyx-900 group-hover:border-cream-100">
                    <ArrowUpRight size={16} strokeWidth={1.4} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
