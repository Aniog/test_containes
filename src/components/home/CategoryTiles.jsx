import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import StrkImage from "@/components/ui/StrkImage"

const TILES = [
  {
    id: "earrings",
    label: "Earrings",
    href: "/shop?category=earrings",
    titleId: "cat-earrings-label",
    imageId: "cat-earrings-1f2a",
    query:
      "[cat-earrings-label] editorial close-up of gold earrings on a model warm neutral background",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    href: "/shop?category=necklaces",
    titleId: "cat-necklaces-label",
    imageId: "cat-necklaces-3b4c",
    query:
      "[cat-necklaces-label] editorial close-up of a gold necklace on warm neutral background",
  },
  {
    id: "huggies",
    label: "Huggies",
    href: "/shop?category=huggies",
    titleId: "cat-huggies-label",
    imageId: "cat-huggies-5d6e",
    query:
      "[cat-huggies-label] editorial close-up of gold huggie hoop earrings on warm neutral background",
  },
]

export default function CategoryTiles() {
  return (
    <section className="bg-canvas py-20 md:py-28">
      <div className="container-content">
        <div className="mb-12 text-center md:mb-16">
          <p className="eyebrow">Shop by Category</p>
          <h2
            className="display-lg mx-auto mt-3 max-w-xl text-ink text-balance"
            style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}
          >
            Three collections, one quiet edit.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {TILES.map((tile) => (
            <Link
              key={tile.id}
              to={tile.href}
              className="group relative block overflow-hidden"
            >
              <div className="aspect-[4/5] w-full">
                <StrkImage
                  id={tile.imageId}
                  query={tile.query}
                  ratio="4x5"
                  width={800}
                  alt={tile.label}
                  fallback="bg-hairline/60"
                />
              </div>
              {/* Hover overlay with label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-b from-night/0 via-night/0 to-night/55 p-6 transition-all duration-500 ease-editorial">
                <div className="flex w-full items-end justify-between">
                  <h3
                    id={tile.titleId}
                    className="font-serif text-3xl text-onNight md:text-4xl"
                  >
                    {tile.label}
                  </h3>
                  <span className="flex h-10 w-10 items-center justify-center border border-onNight/40 text-onNight transition-all duration-500 ease-editorial group-hover:border-gold group-hover:bg-gold group-hover:text-onNight">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                </div>
                <span className="mt-3 block h-px w-12 bg-onNight/40 transition-all duration-500 ease-editorial group-hover:w-20 group-hover:bg-gold" />
                <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.24em] text-onNight/75">
                  Shop the edit
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
