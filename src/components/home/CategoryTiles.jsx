import { Link } from 'react-router-dom'
import SectionIntro from '@/components/shared/SectionIntro.jsx'
import { categoryTiles } from '@/data/products.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'

const CategoryTiles = () => {
  const containerRef = useStrkImages([])

  return (
    <section className="page-shell py-16 md:py-24" id="collections">
      <SectionIntro
        eyebrow="Shop by category"
        title="A focused edit for every way you wear gold"
        description="Explore sculptural earrings, refined necklaces, and close-to-ear essentials built for layering."
      />

      <div ref={containerRef} className="grid gap-6 md:grid-cols-3">
        {categoryTiles.map((tile) => {
          const titleId = `${tile.name.toLowerCase()}-tile-title`
          const descId = `${tile.name.toLowerCase()}-tile-desc`

          return (
            <Link
              key={tile.name}
              className="group relative block overflow-hidden rounded-[2rem] bg-velvet shadow-card"
              to={tile.href}
            >
              <img
                alt={tile.name}
                className="h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                data-strk-img={`[${descId}] [${titleId}]`}
                data-strk-img-id={`${tile.name.toLowerCase()}-tile-image`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-velvet/85 via-velvet/10 to-transparent p-6">
                <div className="translate-y-3 transition-transform duration-300 group-hover:translate-y-0">
                  <h3 id={titleId} className="font-editorial text-4xl text-white">
                    {tile.name}
                  </h3>
                  <p id={descId} className="mt-2 max-w-xs text-sm leading-7 text-white/75 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {tile.description}
                  </p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default CategoryTiles
