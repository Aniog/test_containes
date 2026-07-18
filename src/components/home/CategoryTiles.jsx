import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { StrkImage, useStrkImages } from "@/components/ui/StrkImage"
import { categories } from "@/data/products"

export default function CategoryTiles() {
  const ref = useStrkImages([])
  return (
    <section ref={ref} className="container-editorial py-20 md:py-28">
      <div className="mb-12 text-center">
        <p className="eyebrow">Find Your Piece</p>
        <h2 className="heading-serif mt-3 text-4xl md:text-5xl">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {categories.map((cat) => {
          const nameId = `cat-name-${cat.id}`
          const descId = `cat-desc-${cat.id}`
          return (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.name}`}
              className="group relative aspect-[4/5] overflow-hidden bg-cream-200"
            >
              <StrkImage
                imgId={cat.imgId}
                query={`[${descId}] [${nameId}]`}
                ratio="4x5"
                width={700}
                alt={cat.name}
                className="h-full w-full object-cover transition-transform duration-700 ease-elegant group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/5 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p
                  id={nameId}
                  className="font-serif text-3xl uppercase tracking-widest text-cream-50"
                >
                  {cat.name}
                </p>
                <p
                  id={descId}
                  className="mt-1 max-h-0 overflow-hidden font-sans text-sm text-cream-50/85 opacity-0 transition-all duration-500 ease-elegant group-hover:max-h-16 group-hover:opacity-100"
                >
                  {cat.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 font-sans text-[10px] uppercase tracking-ultra text-gold-light">
                  Shop Now <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
