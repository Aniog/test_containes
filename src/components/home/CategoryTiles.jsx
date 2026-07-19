import { useRef } from 'react'
import { Link } from 'react-router-dom'
import EditorialImage from '@/components/common/EditorialImage'
import { categories } from '@/data/products'
import { useImageLoader } from '@/hooks/useImageLoader'

const CategoryTiles = () => {
  const sectionRef = useRef(null)
  useImageLoader(sectionRef, [])

  return (
    <section ref={sectionRef} className="bg-velmora-ivory px-5 py-20 text-velmora-ink md:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-velmora-gold-deep">Shop by silhouette</p>
          <h2 id="category-title" className="mt-3 font-serif text-5xl font-semibold text-velmora-ink">A piece for every ritual</h2>
          <p id="category-subtitle" className="mx-auto mt-4 max-w-xl font-sans text-sm leading-7 text-velmora-taupe">Explore quiet statement jewelry designed to warm the skin and finish the moment.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => {
            const titleId = `category-${category.id}-title`
            const descId = `category-${category.id}-desc`
            return (
              <Link key={category.id} to={`/shop?category=${category.name}`} className="group relative block overflow-hidden rounded-[2rem] bg-velmora-espresso text-velmora-ivory shadow-sm">
                <EditorialImage
                  id={`category-${category.id}-img-7d2a`}
                  query={`[${descId}] [${titleId}] [category-subtitle] [category-title]`}
                  ratio="4x3"
                  width="900"
                  alt={`${category.name} jewelry`}
                  className="aspect-[4/5] opacity-80 md:aspect-[4/4] lg:aspect-[4/5]"
                  imgClassName="group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/85 via-velmora-espresso/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 transition duration-300 group-hover:translate-y-[-0.25rem]">
                  <p id={titleId} className="font-serif text-4xl font-semibold text-velmora-ivory">{category.name}</p>
                  <p id={descId} className="mt-2 max-w-xs font-sans text-sm leading-6 text-velmora-champagne opacity-90">{category.description}</p>
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
