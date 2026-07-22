import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import StrkImage from "@/components/ui/StrkImage";

const TILES = [
  {
    id: "cat-earrings",
    label: "Earrings",
    to: "/shop?category=earrings",
    titleId: "cat-earrings-title",
    descId: "cat-earrings-desc",
    imgId: "cat-earrings-img",
    query:
      "collection of elegant gold earrings on warm dark background editorial product photography",
  },
  {
    id: "cat-necklaces",
    label: "Necklaces",
    to: "/shop?category=necklaces",
    titleId: "cat-necklaces-title",
    descId: "cat-necklaces-desc",
    imgId: "cat-necklaces-img",
    query:
      "collection of delicate gold necklaces on warm dark background editorial product photography",
  },
  {
    id: "cat-huggies",
    label: "Huggies",
    to: "/shop?category=huggies",
    titleId: "cat-huggies-title",
    descId: "cat-huggies-desc",
    imgId: "cat-huggies-img",
    query:
      "collection of chunky gold huggie hoop earrings on warm dark background editorial product photography",
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  return (
    <section
      aria-labelledby="categories-title"
      className="bg-ivory py-20 md:py-28"
    >
      <div className="container-x">
        <div className="text-center max-w-xl mx-auto mb-12 md:mb-16">
          <p className="eyebrow mb-4">Shop by Category</p>
          <h2
            id="categories-title"
            className="font-serif text-h2 md:text-[44px] leading-[1.05]"
          >
            <em className="italic font-normal text-champagne-deep">Curated</em>{" "}
            by form
          </h2>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
        >
          {TILES.map((tile) => (
            <Link
              key={tile.id}
              to={tile.to}
              className="group relative overflow-hidden bg-blush aspect-[3/4] block"
              aria-label={`Shop ${tile.label}`}
            >
              <StrkImage
                imgId={tile.imgId}
                query={`[${tile.descId}] [${tile.titleId}] ${tile.query}`}
                ratio="3x4"
                width={900}
                alt={tile.label}

                className="h-full transition-transform duration-700 ease-editorial group-hover:scale-[1.04]"
              />
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(38,33,29,0) 40%, rgba(38,33,29,0.7) 100%)",
                }}
              />
              <div className="absolute inset-0 flex items-end p-7 md:p-9">
                <div className="text-bone w-full flex items-end justify-between">
                  <div>
                    <h3
                      id={tile.titleId}
                      className="font-serif text-3xl md:text-4xl leading-none"
                    >
                      {tile.label}
                    </h3>
                    <p
                      id={tile.descId}
                      className="text-eyebrow uppercase text-bone/75 mt-3"
                    >
                      Shop the edit
                    </p>
                  </div>
                  <span
                    className="w-11 h-11 grid place-items-center border border-bone/40 text-bone transition-all duration-300 group-hover:bg-bone group-hover:text-ink group-hover:border-bone"
                    aria-hidden="true"
                  >
                    <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
