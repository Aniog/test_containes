import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { useReveal } from "@/hooks/useReveal"
import { CATEGORY_TILES } from "@/data/products"
import { cn } from "@/lib/utils"
import StockImage from "@/components/ui/StockImage"

export default function CategoryTiles() {
  const [ref, inView] = useReveal({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 md:py-28 bg-bone" aria-labelledby="categories-heading">
      <div className="container-editorial">
        <header className={cn("mb-12 md:mb-16 transition-all duration-700", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")}>
          <p className="eyebrow-gold mb-3">Shop by Category</p>
          <h2 id="categories-heading" className="font-serif text-4xl sm:text-5xl text-ink font-light tracking-tight">
            Find your piece
          </h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {CATEGORY_TILES.map((tile, i) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.id}`}
              className={cn(
                "group relative block aspect-[4/5] overflow-hidden rounded-sm bg-bone-2 transition-all duration-700",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              )}
              style={{ transitionDelay: inView ? `${i * 100}ms` : "0ms" }}
            >
              <StockImage
                imgId={tile.imgId}
                query={`[${tile.titleId}] editorial gold ${tile.title.toLowerCase()} on warm background`}
                ratio="4x5"
                width={900}
                alt={tile.title}
                className="absolute inset-0 w-full h-full"
                imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(27,24,21,0.05) 0%, rgba(27,24,21,0.45) 100%)",
                }}
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex items-end justify-between">
                <div>
                  <h3 id={tile.titleId} className="font-serif text-3xl sm:text-4xl text-bone font-light">
                    {tile.title}
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-2 text-[11px] uppercase tracking-eyebrow text-bone/90 font-sans">
                    {tile.label} <ArrowRight size={12} strokeWidth={1.4} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
