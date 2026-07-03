import { Link } from "react-router-dom"
import { StockImage } from "@/components/StockImage"

const categories = [
  { id: "earrings", label: "Earrings", query: "gold earrings on dark background" },
  { id: "necklaces", label: "Necklaces", query: "gold necklace on model editorial" },
  { id: "huggies", label: "Huggies", query: "gold huggie earrings closeup" },
]

export function CategoryTiles() {
  return (
    <section className="bg-paper py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        <h2 className="text-center font-serif text-3xl font-light text-ink md:text-5xl">
          Shop by Category
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.label}`}
              className="group relative aspect-[3/4] overflow-hidden bg-sand"
            >
              <StockImage
                id={`category-${category.id}`}
                query={`[category-${category.id}-label]`}
                ratio="3x4"
                width={700}
                alt={category.label}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/20 transition-colors duration-300 group-hover:bg-ink/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-${category.id}-label`}
                  className="font-serif text-2xl font-light uppercase tracking-ultra text-white md:text-3xl"
                >
                  {category.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
