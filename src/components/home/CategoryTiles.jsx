import { Link } from 'react-router-dom'
import SectionHeader from '@/components/common/SectionHeader'
import StrkImage from '@/components/common/StrkImage'
import { categories } from '@/data/products'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function CategoryTiles() {
  const tilesRef = useImageLoader([])

  return (
    <section ref={tilesRef} className="bg-velmora-porcelain px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Shop by category" title="Start with the silhouette" copy="Three refined edits for the pieces you wear close: luminous ears, softened necklines, and compact everyday gold." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to={`/shop?category=${encodeURIComponent(category.label)}`} className="group relative isolate min-h-[420px] overflow-hidden rounded-[2rem] bg-velmora-bronze shadow-velvet">
              <StrkImage id={category.imgId} query={`[${category.descId}] [${category.titleId}]`} ratio="3x4" width="900" alt={category.label} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-velmora-espresso/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <p id={category.descId} className="mb-3 translate-y-3 text-sm leading-6 text-white/80 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">{category.description}</p>
                <h3 id={category.titleId} className="font-serif text-4xl font-medium">{category.label}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
