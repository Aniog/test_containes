import { Link } from "react-router-dom"
import { categoryTiles } from "@/data/store"
import SectionHeading from "@/components/shared/SectionHeading"
import StockImage from "@/components/shared/StockImage"

const CategoryTiles = () => {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Shop by Category"
          title="Curated pieces for earrings, necklaces, and sculptural huggies"
          description="Explore the silhouettes our customers love most, each one styled with an editorial eye and finished in soft warm gold."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {categoryTiles.map((tile) => {
            const titleId = `${tile.id}-title`
            const descId = `${tile.id}-desc`

            return (
              <Link
                key={tile.id}
                to={tile.link}
                className="group relative block overflow-hidden rounded-[2rem] bg-truffle text-ivory shadow-card"
              >
                <StockImage
                  imageId={`${tile.id}-image`}
                  query={`[${descId}] [${titleId}]`}
                  ratio="3x4"
                  width="900"
                  alt={tile.name}
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velvet/90 via-velvet/25 to-transparent transition group-hover:from-velvet/85" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p id={titleId} className="font-serif text-4xl text-ivory">
                    {tile.name}
                  </p>
                  <p id={descId} className="mt-3 max-w-xs text-sm leading-6 text-ivory/78">
                    {tile.description}
                  </p>
                  <span className="mt-6 inline-flex text-xs uppercase tracking-[0.28em] text-gold">
                    Discover {tile.name}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CategoryTiles
