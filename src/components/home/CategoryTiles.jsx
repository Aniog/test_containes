import { Link } from 'react-router-dom'
import { useStockImages } from '@/hooks/useStockImages'

export default function CategoryTiles({ categories }) {
  const containerRef = useStockImages([categories])

  return (
    <section id="collections" className="section-shell bg-porcelain">
      <div className="container-shell space-y-10" ref={containerRef}>
        <div className="space-y-4">
          <p className="eyebrow">Collections</p>
          <h2 className="section-title">Shop by Category</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {categories.map((category) => {
            const titleId = `category-${category.slug}-title`
            const cueId = `category-${category.slug}-cue`

            return (
              <Link
                key={category.slug}
                to={category.href}
                className="group relative min-h-[24rem] overflow-hidden rounded-[2rem] border border-mist/70"
              >
                <div
                  className="absolute inset-0 transition duration-500 group-hover:scale-105"
                  data-strk-bg-id={`category-${category.slug}-bg`}
                  data-strk-bg={`[${cueId}] [${titleId}]`}
                  data-strk-bg-ratio="3x4"
                  data-strk-bg-width="900"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-porcelain">
                  <p id={titleId} className="font-serif text-3xl text-porcelain transition duration-300 group-hover:text-champagne">
                    {category.label}
                  </p>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-porcelain/75">{category.description}</p>
                </div>
                <p id={cueId} className="sr-only">
                  {category.cue}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
