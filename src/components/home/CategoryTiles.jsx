import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import StockImage from "@/components/StockImage"
import { useReveal } from "@/hooks/useReveal"

const tiles = [
  {
    id: "earrings",
    label: "Earrings",
    href: "/shop?category=earrings",
    query: "gold earrings flat lay on warm beige linen editorial jewelry product photography",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    href: "/shop?category=necklaces",
    query: "gold crystal necklaces layered on warm beige background editorial product photography",
  },
  {
    id: "huggies",
    label: "Huggies",
    href: "/shop?category=huggies",
    query: "gold huggie hoop earrings flat lay on dark warm editorial jewelry product photography",
  },
]

export default function CategoryTiles() {
  const ref = useReveal(0.1)
  return (
    <section className="bg-ivory-100 py-20 sm:py-28">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12">
        <div ref={ref} className="reveal mb-12 sm:mb-16 text-center max-w-2xl mx-auto">
          <p className="eyebrow mb-3">Shop by category</p>
          <h2 className="display-lg font-serif">Find your everyday</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={tile.href}
              className="group relative block aspect-[4/5] overflow-hidden bg-ivory-200"
            >
              <StockImage
                id={`cat-tile-${tile.id}`}
                query={tile.query}
                ratio="4x5"
                width="800"
                alt={tile.label}
                className="absolute inset-0"
                imgClassName="w-full h-full object-cover transition-transform duration-[1.2s] ease-elegant group-hover:scale-105"
              />
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(31,22,18,0.05) 0%, rgba(31,22,18,0.35) 100%)",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 sm:p-8 text-ivory">
                <h3 className="font-serif text-3xl sm:text-4xl tracking-tight">
                  {tile.label}
                </h3>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[10px] tracking-[0.28em] uppercase text-ivory-200/95 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  Shop {tile.label}
                  <ArrowUpRight className="w-3 h-3" strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
