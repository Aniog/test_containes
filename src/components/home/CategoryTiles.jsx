import { Link } from "react-router-dom"
import { ImageLoader, StrkBackground } from "@/components/Image"
import { categories } from "@/data/products"

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-champagne mb-3">
            Shop by Category
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-cream">
            Find Your Finish
          </h2>
        </div>

        <ImageLoader>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative aspect-[4/5] overflow-hidden"
              >
                <StrkBackground
                  id={`category-bg-${category.id}`}
                  query={`[category-name-${category.id}]`}
                  ratio="3x4"
                  width="800"
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                >
                  <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/30 transition-colors" />
                </StrkBackground>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3
                    id={`category-name-${category.id}`}
                    className="font-serif text-2xl md:text-3xl text-cream uppercase tracking-[0.2em] border-b border-transparent group-hover:border-champagne transition-all pb-1"
                  >
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </ImageLoader>
      </div>
    </section>
  )
}
