import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CATEGORY_TILE_IMAGES } from "@/data/realImages";

const TILES = [
  {
    id: "earrings",
    label: "Earrings",
    subtitle: "Stacks, cuffs, drops",
    img: CATEGORY_TILE_IMAGES.earrings,
    to: "/shop?collection=earrings",
    size: "lg",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    subtitle: "Pendants, chains, charms",
    img: CATEGORY_TILE_IMAGES.necklaces,
    to: "/shop?collection=necklaces",
    size: "md",
  },
  {
    id: "huggies",
    label: "Huggies",
    subtitle: "The everyday hoop",
    img: CATEGORY_TILE_IMAGES.huggies,
    to: "/shop?collection=huggies",
    size: "md",
  },
];

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function CategoryTiles() {
  return (
    <section className="bg-bone py-16 sm:py-20 lg:py-28">
      <div className="container-page">
        <div className="mb-10 sm:mb-14">
          <p className="eyebrow">Shop the Edit</p>
          <h2
            id="cat-title"
            className="mt-3 font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-[1.05] text-ink"
          >
            By Category
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
          {/* Big tile — earrings (col-span 2 on mobile, span 6 on desktop) */}
          <Link
            to={TILES[0].to}
            className="group relative col-span-2 lg:col-span-6 aspect-[4/5] lg:aspect-[5/6] overflow-hidden bg-cream"
          >
            <img
              alt={TILES[0].label}
              src={TILES[0].img}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-velvet group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/55" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 flex items-end justify-between text-bone">
              <div>
                <p className="eyebrow text-bone/80">{TILES[0].subtitle}</p>
                <h3 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-light">
                  {TILES[0].label}
                </h3>
              </div>
              <span className="inline-flex items-center justify-center w-10 h-10 border border-bone/60 group-hover:bg-bone group-hover:text-ink transition-colors duration-300">
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.25} />
              </span>
            </div>
          </Link>

          {/* Two stacked tiles */}
          <Link
            to={TILES[1].to}
            className="group relative col-span-2 lg:col-span-6 aspect-[4/3] lg:aspect-[5/3] overflow-hidden bg-cream"
          >
            <img
              alt={TILES[1].label}
              src={TILES[1].img}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-velvet group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/55" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 flex items-end justify-between text-bone">
              <div>
                <p className="eyebrow text-bone/80">{TILES[1].subtitle}</p>
                <h3 className="mt-2 font-serif text-3xl sm:text-4xl font-light">
                  {TILES[1].label}
                </h3>
              </div>
              <span className="inline-flex items-center justify-center w-10 h-10 border border-bone/60 group-hover:bg-bone group-hover:text-ink transition-colors duration-300">
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.25} />
              </span>
            </div>
          </Link>

          <Link
            to={TILES[2].to}
            className="group relative col-span-2 lg:col-span-6 aspect-[4/3] lg:aspect-[5/3] overflow-hidden bg-cream"
          >
            <img
              alt={TILES[2].label}
              src={TILES[2].img}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-velvet group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/55" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 flex items-end justify-between text-bone">
              <div>
                <p className="eyebrow text-bone/80">{TILES[2].subtitle}</p>
                <h3 className="mt-2 font-serif text-3xl sm:text-4xl font-light">
                  {TILES[2].label}
                </h3>
              </div>
              <span className="inline-flex items-center justify-center w-10 h-10 border border-bone/60 group-hover:bg-bone group-hover:text-ink transition-colors duration-300">
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
