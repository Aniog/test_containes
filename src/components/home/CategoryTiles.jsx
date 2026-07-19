import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight } from "lucide-react";

const tiles = [
  {
    id: "earrings",
    name: "Earrings",
    path: "/shop?category=earrings",
    imgId: "tile-earrings-img",
    titleId: "tile-earrings-title",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    path: "/shop?category=necklaces",
    imgId: "tile-necklaces-img",
    titleId: "tile-necklaces-title",
  },
  {
    id: "huggies",
    name: "Huggies",
    path: "/shop?category=huggies",
    imgId: "tile-huggies-img",
    titleId: "tile-huggies-title",
  },
];

export default function CategoryTiles() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="container-x py-20 md:py-28">
      <div className="text-center mb-12 md:mb-16">
        <span className="eyebrow mb-3 block">Curated</span>
        <h2 className="font-serif text-4xl md:text-6xl leading-[1.05]">
          Shop by Category
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {tiles.map((t) => (
          <Link
            key={t.id}
            to={t.path}
            className="group relative aspect-[3/4] overflow-hidden bg-cream"
          >
            <img
              alt={t.name}
              data-strk-img-id={t.imgId}
              data-strk-img={`[${t.titleId}] [category-section-title]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out-soft group-hover:scale-105"
            />
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(180deg, rgba(31,26,23,0) 50%, rgba(31,26,23,0.55) 100%)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 p-7 md:p-9 flex items-end justify-between">
              <h3
                id={t.titleId}
                className="font-serif text-3xl md:text-4xl text-ivory"
              >
                {t.name}
              </h3>
              <span className="w-10 h-10 rounded-full bg-ivory text-espresso grid place-items-center transition-all duration-300 group-hover:bg-gold group-hover:rotate-[-45deg]">
                <ArrowRight className="w-4 h-4" strokeWidth={1.4} />
              </span>
            </div>
          </Link>
        ))}
      </div>
      <span id="category-section-title" className="sr-only">
        Shop jewelry by category
      </span>
    </section>
  );
}
