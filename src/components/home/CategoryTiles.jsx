import { Link } from "react-router-dom";
import { useImageLoader } from "@/hooks/useImageLoader";

const tiles = [
  { id: "earrings", label: "Earrings", query: "gold earrings on model", labelId: "cat-label-earrings" },
  { id: "necklaces", label: "Necklaces", query: "gold necklace on model", labelId: "cat-label-necklaces" },
  { id: "huggies", label: "Huggies", query: "gold huggie earrings", labelId: "cat-label-huggies" },
];

export function CategoryTiles() {
  const containerRef = useImageLoader();

  return (
    <section ref={containerRef} className="bg-cream py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <p className="mb-2 text-center text-[10px] uppercase tracking-[0.25em] text-gold">
          Shop by Category
        </p>
        <h2 className="mb-10 text-center font-serif text-3xl md:text-4xl">
          Find Your Favorite
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-linen"
            >
              <div
                data-strk-bg-id={`category-bg-${tile.id}`}
                data-strk-bg={`[${tile.labelId}] ${tile.query}`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso/20 transition-colors group-hover:bg-espresso/35" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={tile.labelId}
                  className="border border-cream px-6 py-3 text-center text-xs uppercase tracking-widest text-cream transition-all duration-300 group-hover:bg-cream group-hover:text-espresso"
                >
                  {tile.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
