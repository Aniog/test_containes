import { Link } from 'react-router-dom'
import { categoryTiles } from '@/data/store.js'
import SectionHeading from '@/components/ui/SectionHeading.jsx'

export default function CategoryTilesSection() {
  return (
    <section className="bg-stone-950 py-20 sm:py-24">
      <div className="section-shell space-y-12">
        <SectionHeading
          eyebrow="Shop by category"
          title="A focused wardrobe of everyday gold."
          description="Explore sculptural earrings, layering necklaces, and luminous huggies through an editorial lens."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {categoryTiles.map((category) => {
            const titleId = `category-${category.slug}-title`
            const descriptionId = `category-${category.slug}-description`

            return (
              <Link key={category.slug} to={`/shop?category=${encodeURIComponent(category.name)}`} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-stone-950">
                <p id={descriptionId} className="hidden">{category.description}</p>
                <div className="aspect-[4/5]">
                  <img alt={category.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" data-strk-img-id={`category-${category.slug}-img`} data-strk-img={`[${descriptionId}] [${titleId}]`} data-strk-img-ratio="3x4" data-strk-img-width="900" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/15 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                  <div>
                    <p id={titleId} className="font-display text-4xl text-stone-50">{category.name}</p>
                    <p className="mt-2 max-w-xs text-sm text-stone-300 opacity-0 transition duration-300 group-hover:opacity-100">{category.description}</p>
                  </div>
                  <span className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.24em] text-stone-100 transition group-hover:border-amber-200/60 group-hover:text-amber-200">
                    Explore
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
