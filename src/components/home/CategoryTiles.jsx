import { Link } from 'react-router-dom'
import SectionIntro from '@/components/common/SectionIntro'

const CategoryTiles = ({ items }) => {
  return (
    <section className="space-y-8">
      <SectionIntro
        eyebrow="Shop by category"
        title="Curate your everyday rotation"
        description="Discover polished essentials and gift-worthy silhouettes across our most-loved categories."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => {
          const titleId = `category-${item.name.toLowerCase()}-title`
          const descriptionId = `category-${item.name.toLowerCase()}-description`

          return (
            <Link
              key={item.name}
              to={`/shop?category=${encodeURIComponent(item.name)}`}
              className="group relative overflow-hidden rounded-[28px] border border-velvet/10 bg-velvet text-ivory shadow-soft"
            >
              <img
                alt={item.name}
                className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                data-strk-img-id={`category-${item.name.toLowerCase()}-image`}
                data-strk-img={`[${descriptionId}] [${titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velvet via-velvet/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 translate-y-3 space-y-2 p-6 transition duration-500 group-hover:translate-y-0">
                <p className="text-[11px] uppercase tracking-eyebrow text-ivory-deep/70">Category</p>
                <h3 id={titleId} className="font-serif text-4xl text-ivory">
                  {item.name}
                </h3>
                <p id={descriptionId} className="max-w-xs text-sm leading-6 text-ivory-deep/80 opacity-0 transition duration-500 group-hover:opacity-100">
                  {item.description}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default CategoryTiles
