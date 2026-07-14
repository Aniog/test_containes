import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { StockImage } from "@/components/ui/StockImage"

const tiles = [
  {
    id: "earrings",
    label: "Earrings",
    sub: "Studs, cuffs, drops",
    imgId: "cat-earrings-img",
    query: "category-earrings-title category-earrings-sub home-shop-title",
    to: "/shop?category=earrings",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    sub: "Pendants & chains",
    imgId: "cat-necklaces-img",
    query: "category-necklaces-title category-necklaces-sub home-shop-title",
    to: "/shop?category=necklaces",
  },
  {
    id: "huggies",
    label: "Huggies",
    sub: "The everyday hoop",
    imgId: "cat-huggies-img",
    query: "category-huggies-title category-huggies-sub home-shop-title",
    to: "/shop?category=huggies",
  },
]

export function CategoryTiles() {
  return (
    <section
      id="categories"
      className="container-x py-20 md:py-28"
      aria-labelledby="home-shop-title"
    >
      <div className="mb-10 flex items-end justify-between gap-6 md:mb-14">
        <div>
          <p className="eyebrow">Curated for you</p>
          <h2
            id="home-shop-title"
            className="mt-3 font-serif text-4xl text-ink-500 sm:text-5xl"
          >
            Shop by Category
          </h2>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3 md:gap-5">
        {tiles.map((t) => (
          <Link
            key={t.id}
            to={t.to}
            id={`category-${t.id}`}
            className="group relative block aspect-[4/5] overflow-hidden bg-ink-600 md:aspect-[3/4]"
          >
            <StockImage
              imgId={t.imgId}
              query={t.query}
              ratio="3x4"
              width="700"
              alt={t.label}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-elegant group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-ink-700/75 via-ink-600/15 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-ivory-50 md:p-8">
              <div>
                <h3
                  id={`category-${t.id}-title`}
                  className="font-serif text-3xl md:text-4xl"
                >
                  {t.label}
                </h3>
                <p
                  id={`category-${t.id}-sub`}
                  className="mt-1 text-[11px] uppercase tracking-wider2 text-ivory-50/80"
                >
                  {t.sub}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center border border-ivory-50/30 text-ivory-50 transition-all duration-500 ease-elegant group-hover:border-ivory-50 group-hover:bg-ivory-50 group-hover:text-ink-500"
              >
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
