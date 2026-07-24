import { Link } from 'react-router-dom'
import { categories } from '@/data/products.js'
import ImageTag from '@/components/ui/ImageTag.jsx'

export default function CategoryTiles() {
  return (
    <section className="space-y-8">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#8a6c5d]">Shop by category</p>
          <h2 className="font-['Cormorant_Garamond'] text-4xl text-[#241d1f] md:text-5xl">Curated for how you wear it</h2>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {categories.map((category) => {
          const titleId = `category-${category.id}-title`
          const descId = `category-${category.id}-desc`

          return (
            <Link
              key={category.id}
              to={`/shop?category=${category.label}`}
              className="group relative overflow-hidden rounded-[2rem] border border-[#e5d5c8]"
            >
              <ImageTag
                alt={category.label}
                imgId={category.imgId}
                query={`[${descId}] [${titleId}]`}
                ratio="4x3"
                width="900"
                className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,28,31,0.08)_25%,rgba(34,28,31,0.74)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                <div>
                  <h3
                    id={titleId}
                    className="font-['Cormorant_Garamond'] text-3xl text-[#f6f0ea]"
                  >
                    {category.label}
                  </h3>
                  <p id={descId} className="mt-2 max-w-xs text-sm leading-6 text-[#efe3d6]">
                    {category.description}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#ddc6bb] transition group-hover:text-[#b78b54]">
                  Discover
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
