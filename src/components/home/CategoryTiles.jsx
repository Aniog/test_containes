import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categoryHighlights } from '@/data/store'

const CategoryTiles = () => {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {categoryHighlights.map((category) => {
        const titleId = `category-${category.slug}-title`
        const descId = `category-${category.slug}-desc`

        return (
          <Link
            key={category.slug}
            to={`/shop?category=${encodeURIComponent(category.slug)}`}
            className="group relative overflow-hidden rounded-[2rem] border border-stone-200/80 bg-brand-ink text-stone-50 shadow-card"
          >
            <div
              className="absolute inset-0 transition duration-700 group-hover:scale-105"
              data-strk-bg-id={`category-bg-${category.slug}-1ab7`}
              data-strk-bg={`[${descId}] [${titleId}]`}
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="900"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/25 to-transparent" />
            <div className="relative flex aspect-[4/5] items-end p-6">
              <div className="flex w-full items-end justify-between gap-4">
                <div className="space-y-2">
                  <p id={titleId} className="font-serif text-4xl leading-none">
                    {category.name}
                  </p>
                  <p id={descId} className="max-w-[16rem] text-sm leading-6 text-stone-200">
                    {category.description}
                  </p>
                </div>
                <span className="rounded-full border border-white/15 bg-white/10 p-3 backdrop-blur-sm transition group-hover:border-brand-gold group-hover:text-brand-gold">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default CategoryTiles
