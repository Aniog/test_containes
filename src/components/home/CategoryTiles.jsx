import { Link } from "react-router-dom";
import StockImage from "@/components/ui/StockImage";

const TILES = [
  {
    id: "earrings",
    label: "Earrings",
    sub: "Studs · Drops · Cuffs",
    query: "gold earrings laid out on warm linen editorial flat lay",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    sub: "Pendants · Chains · Sets",
    query: "delicate gold necklace pendant on warm linen editorial",
  },
  {
    id: "huggies",
    label: "Huggies",
    sub: "Dome · Pave · Sculpted",
    query: "pair of chunky gold huggie earrings on warm dark background",
  },
];

export default function CategoryTiles() {
  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="container-x">
        <div className="mb-10 md:mb-14 max-w-xl">
          <p className="eyebrow eyebrow-gold">Shop by Category</p>
          <h2 className="section-title mt-3">
            Find your <span className="section-title-italic">everyday</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {TILES.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.id}`}
              className="group relative block overflow-hidden bg-espresso"
              id={`cat-${tile.id}`}
            >
              <div className="relative aspect-[3/4] stock-skeleton">
                <StockImage
                  query={`[cat-${tile.id}-title] [cat-${tile.id}-sub] gold ${tile.id} editorial warm light`}
                  imageId={`cat-tile-${tile.id}`}
                  ratio="3x4"
                  width={900}
                  alt={tile.label}
                  className="w-full h-full object-cover transition-transform duration-[700ms] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 md:pb-12 text-center text-ivory">
                <h3
                  id={`cat-${tile.id}-title`}
                  className="font-display text-3xl md:text-4xl tracking-wide"
                >
                  {tile.label}
                </h3>
                <p
                  id={`cat-${tile.id}-sub`}
                  className="mt-2 text-[10px] tracking-widest3 uppercase text-ivory/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {tile.sub}
                </p>
                <span className="mt-3 text-[10px] tracking-widest3 uppercase border-b border-ivory/60 pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Shop {tile.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}