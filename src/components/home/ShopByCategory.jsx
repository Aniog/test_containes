import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const tiles = [
  {
    label: "Earrings",
    to: "/shop?category=earrings",
    imgId: "cat-earrings-tile-77a",
    textId: "cat-earrings-tile-label",
    textIds: ["cat-earrings-tile-label"],
  },
  {
    label: "Necklaces",
    to: "/shop?category=necklaces",
    imgId: "cat-necklaces-tile-77b",
    textId: "cat-necklaces-tile-label",
    textIds: ["cat-necklaces-tile-label"],
  },
  {
    label: "Huggies",
    to: "/shop?category=huggies",
    imgId: "cat-huggies-tile-77c",
    textId: "cat-huggies-tile-label",
    textIds: ["cat-huggies-tile-label"],
  },
];

export default function ShopByCategory() {
  return (
    <section className="bg-cream-100 py-20 lg:py-28">
      <div className="max-w-editorial mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <span className="eyebrow-gold">The Collection</span>
          <h2 className="font-serif text-ink mt-3 text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.05]">
            Shop by category
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.label}
              to={tile.to}
              className="group relative aspect-[3/4] overflow-hidden bg-cream-200 block"
            >
              <img
                alt={tile.label}
                data-strk-img-id={tile.imgId}
                data-strk-img={`[${tile.textId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 sm:pb-10">
                <h3
                  id={tile.textId}
                  className="font-serif text-cream text-[28px] sm:text-[32px] tracking-wide"
                >
                  {tile.label}
                </h3>
                <span className="mt-3 flex items-center gap-2 text-cream/90 text-[11px] tracking-[0.28em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Shop
                  <ArrowUpRight
                    className="w-3.5 h-3.5"
                    strokeWidth={1.6}
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
