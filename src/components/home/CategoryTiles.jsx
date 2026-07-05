import { Link } from 'react-router-dom'
import { categoryTiles } from '@/data/store'
import SectionHeading from '@/components/ui/SectionHeading'

function CategoryTiles() {
  return (
    <section id="collections" className="bg-pearl py-16 md:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Shop by category"
          title="Jewelry designed around the way you actually wear it"
          description="Discover sculptural earrings, softly gleaming necklaces, and polished huggies made for layering."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {categoryTiles.map((category) => {
            const titleId = `category-title-${category.id}`
            const descId = `category-desc-${category.id}`

            return (
              <Link
                key={category.id}
                to={`/shop?category=${encodeURIComponent(category.label)}`}
                className="group relative overflow-hidden rounded-[28px] border border-line bg-velvet shadow-card"
              >
                <img
                  alt={category.label}
                  className="aspect-[4/5] h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  data-strk-img-id={`category-image-${category.id}`}
                  data-strk-img={`[${descId}] [${titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velvet via-velvet/30 to-transparent opacity-90 transition duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-ivory md:p-7">
                  <p id={descId} className="text-sm text-ivory/78">
                    {category.description}
                  </p>
                  <h3 id={titleId} className="mt-2 font-serif text-3xl transition duration-300 group-hover:text-champagne">
                    {category.label}
                  </h3>
                  <span className="mt-4 inline-flex text-xs uppercase tracking-[0.2em] text-ivory/74">
                    Explore category
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
